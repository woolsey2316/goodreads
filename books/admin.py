from django.contrib import admin
from books.models import GoodreadsUser, Books

admin.site.register(GoodreadsUser)
admin.site.register(Books)
