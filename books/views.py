import json

from django.db.models import Q
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from books.auth_utils import create_token, get_user_from_request, hash_password, verify_password
from books.models import Books, GoodreadsUser, Shelf


def home_view(request, *args, **kwargs):
   return HttpResponse("<h1>Hello World!</h1>")


def book_detail_view(request, book_id, *args, **kwargs):
   return HttpResponse(f"<h1>Hey {book_id} </h1>")


@require_http_methods(["GET"])
def current_user_view(request):
    user = get_user_from_request(request)
    if user is None:
        return JsonResponse({"error": "Unauthorized"}, status=401)
    return JsonResponse({"user_id": str(user.user_id), "username": user.username})


@csrf_exempt
@require_http_methods(["POST"])
def signup_view(request):
    body = json.loads(request.body)
    username = body.get("username", "").strip()
    password = body.get("password", "")

    if not username or not password:
        return JsonResponse({"error": "Username and password are required"}, status=400)

    if GoodreadsUser.objects.filter(username=username).exists():
        return JsonResponse({"error": "Username already exists"}, status=400)

    user = GoodreadsUser.objects.create(
        username=username,
        password=hash_password(password),
    )
    token = create_token(user)
    return JsonResponse(
        {
            "token": token,
            "user_id": str(user.user_id),
            "username": user.username,
        },
        status=201,
    )


@csrf_exempt
@require_http_methods(["POST"])
def signin_view(request):
    body = json.loads(request.body)
    username = body.get("username", "").strip()
    password = body.get("password", "")

    if not username or not password:
        return JsonResponse({"error": "Username and password are required"}, status=400)

    try:
        user = GoodreadsUser.objects.get(username=username)
    except GoodreadsUser.DoesNotExist:
        return JsonResponse({"error": "Invalid credentials"}, status=401)

    if not verify_password(password, user.password):
        return JsonResponse({"error": "Invalid credentials"}, status=401)

    token = create_token(user)
    return JsonResponse(
        {
            "token": token,
            "user_id": str(user.user_id),
            "username": user.username,
        }
    )


@csrf_exempt
@require_http_methods(["GET", "POST"])
def shelves_view(request, user_id):
    user = get_user_from_request(request)
    if user is None:
        return JsonResponse({"error": "Unauthorized"}, status=401)

    if user.user_id != user_id:
        return JsonResponse({"error": "Forbidden"}, status=403)

    if request.method == "GET":
        shelves = Shelf.objects.filter(user=user).order_by("shelf_id")
        data = [
            {
                "shelf_id": shelf.shelf_id,
                "name": shelf.name,
                "book_ids": shelf.book_ids,
            }
            for shelf in shelves
        ]
        return JsonResponse(data, safe=False)

    body = json.loads(request.body)
    name = body.get("name", "").strip()
    if not name:
        return JsonResponse({"error": "Name is required"}, status=400)

    shelf = Shelf.objects.create(user=user, name=name, book_ids=[])
    return JsonResponse(
        {
            "shelf_id": shelf.shelf_id,
            "name": shelf.name,
            "book_ids": shelf.book_ids,
        },
        status=201,
    )


@require_http_methods(["GET"])
def search_books_view(request):
    user = get_user_from_request(request)
    if user is None:
        return JsonResponse({"error": "Unauthorized"}, status=401)

    query = request.GET.get("q", "").strip()
    if not query:
        return JsonResponse([], safe=False)

    books = Books.objects.filter(
        Q(title__icontains=query) | Q(authors__icontains=query)
    ).order_by("title")[:20]

    data = [
        {
            "book_id": book.book_id,
            "title": book.title,
            "authors": book.authors,
            "image_url": book.image_url,
            "average_rating": book.average_rating,
        }
        for book in books
    ]
    return JsonResponse(data, safe=False)


@csrf_exempt
@require_http_methods(["POST"])
def shelf_add_book_view(request, user_id, shelf_id):
    user = get_user_from_request(request)
    if user is None:
        return JsonResponse({"error": "Unauthorized"}, status=401)

    if user.user_id != user_id:
        return JsonResponse({"error": "Forbidden"}, status=403)

    try:
        shelf = Shelf.objects.get(shelf_id=shelf_id, user=user)
    except Shelf.DoesNotExist:
        return JsonResponse({"error": "Shelf not found"}, status=404)

    body = json.loads(request.body)
    book_id = body.get("book_id")
    try:
        book_id = int(book_id)
    except (TypeError, ValueError):
        return JsonResponse({"error": "book_id is required"}, status=400)

    if not Books.objects.filter(book_id=book_id).exists():
        return JsonResponse({"error": "Book not found"}, status=404)

    if book_id not in shelf.book_ids:
        shelf.book_ids.append(book_id)
        shelf.save(update_fields=["book_ids"])

    return JsonResponse(
        {
            "shelf_id": shelf.shelf_id,
            "name": shelf.name,
            "book_ids": shelf.book_ids,
        }
    )
