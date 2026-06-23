from django.contrib import admin
from books.models import GoodreadsUser, Books, Shelf

admin.site.register(GoodreadsUser)
admin.site.register(Books)
admin.site.register(Shelf)
