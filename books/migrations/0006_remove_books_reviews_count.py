from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0005_shelf'),
    ]

    operations = [
        migrations.SeparateDatabaseAndState(
            state_operations=[
                migrations.RemoveField(
                    model_name='books',
                    name='reviews_count',
                ),
            ],
            database_operations=[
                migrations.RunSQL(
                    sql='ALTER TABLE books_books DROP COLUMN IF EXISTS reviews_count;',
                    reverse_sql=migrations.RunSQL.noop,
                ),
            ],
        ),
    ]
