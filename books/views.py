import json

from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from books.models import GoodreadsUser, Shelf


def home_view(request, *args, **kwargs):
   return HttpResponse("<h1>Hello World!</h1>")


def book_detail_view(request, book_id, *args, **kwargs):
   return HttpResponse(f"<h1>Hey {book_id} </h1>")


def current_user_view(request):
    user = GoodreadsUser.objects.first()
    if user is None:
        return JsonResponse({"error": "No user found"}, status=404)
    return JsonResponse({"user_id": str(user.user_id)})


@csrf_exempt
@require_http_methods(["GET", "POST"])
def shelves_view(request, user_id):
    try:
        user = GoodreadsUser.objects.get(user_id=user_id)
    except GoodreadsUser.DoesNotExist:
        return JsonResponse({"error": "User not found"}, status=404)

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
