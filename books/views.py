from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from books.models import GoodreadsUser


def home_view(request, *args, **kwargs):
   return HttpResponse("<h1>Hello World!</h1>")


def book_detail_view(request, book_id, *args, **kwargs):
   return HttpResponse(f"<h1>Hey {book_id} </h1>")


def current_user_view(request):
    user = GoodreadsUser.objects.first()
    if user is None:
        return JsonResponse({"error": "No user found"}, status=404)
    return JsonResponse({"user_id": str(user.user_id)})
