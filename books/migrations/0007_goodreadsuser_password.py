from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0006_remove_books_reviews_count'),
    ]

    operations = [
        migrations.AddField(
            model_name='goodreadsuser',
            name='password',
            field=models.CharField(default='', max_length=128),
            preserve_default=False,
        ),
    ]
