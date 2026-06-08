from django.http import HttpResponse
from django.shortcuts import render
def home_view(request, *args, **kwargs):
   return HttpResponse("<h1>Hello World!</h1>")
def book_detail_view(request, book_id, *args, **kwargs):
   return HttpResponse(f"<h1>Hey {book_id} </h1>")
