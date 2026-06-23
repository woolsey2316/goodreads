import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from books.auth_utils import create_token, get_user_from_request, hash_password, verify_password
from books.models import GoodreadsUser, Shelf


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
