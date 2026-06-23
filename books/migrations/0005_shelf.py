from django.db import migrations, models
import django.contrib.postgres.fields
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_seed_default_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shelf',
            fields=[
                ('shelf_id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('book_ids', django.contrib.postgres.fields.ArrayField(base_field=models.BigIntegerField(), blank=True, default=list, size=None)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shelves', to='books.goodreadsuser')),
            ],
        ),
    ]
