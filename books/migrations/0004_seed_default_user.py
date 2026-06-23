from django.db import migrations


def create_default_user(apps, schema_editor):
    GoodreadsUser = apps.get_model('books', 'GoodreadsUser')
    GoodreadsUser.objects.get_or_create(username='default_user')


def remove_default_user(apps, schema_editor):
    GoodreadsUser = apps.get_model('books', 'GoodreadsUser')
    GoodreadsUser.objects.filter(username='default_user').delete()


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0003_goodreadsuser'),
    ]

    operations = [
        migrations.RunPython(create_default_user, remove_default_user),
    ]
