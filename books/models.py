from django.db import models


class GoodreadsUser(models.Model):
   user_id = models.BigAutoField(primary_key=True)
   username = models.CharField(max_length=150, unique=True)


class Books(models.Model):
   book_id = models.BigAutoField(primary_key=True)
   title = models.TextField(blank=False, null=False)
   authors = models.TextField(blank=False, null=False, default='')
   average_rating = models.FloatField(default=0.0)
   isbn = models.TextField(blank=False, null=False)
   isbn13 = models.TextField(blank=False, null=False)
   ratings_count = models.IntegerField(blank=False, null=False)
   ratings_1 = models.IntegerField(blank=False, null=False, default=0)
   ratings_2 = models.IntegerField(blank=False, null=False, default=0)
   ratings_3 = models.IntegerField(blank=False, null=False, default=0)
   ratings_4 = models.IntegerField(blank=False, null=False, default=0)
   ratings_5 = models.IntegerField(blank=False, null=False, default=0)
   image_url = models.TextField(blank=False, null=False, default='')
