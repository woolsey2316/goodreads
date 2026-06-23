import csv
from django.core.management.base import BaseCommand
from books.models import Books

class Command(BaseCommand):
    help = 'Imports records from a local CSV file into the database'

    def add_arguments(self, parser):
        # This tells Django to expect a file path when running the command
        parser.add_argument('csv_file', type=str, help='The path to the CSV file')

    def handle(self, *args, **options):
        file_path = options['csv_file']
        batch_size = 1000
        objs = []
        
        self.stdout.write(self.style.SUCCESS(f"Starting import from: {file_path}"))

        with open(file_path, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)
            
            for row in reader:
                objs.append(
                    Books(
                        book_id=row['book_id'],
                        title=row['title'],
                        authors=row['authors'],
                        average_rating=row['average_rating'],
                        isbn=row['isbn'],
                        isbn13=row['isbn13'],
                        ratings_count=row['ratings_count'],
                        ratings_1=row['ratings_1'],
                        ratings_2=row['ratings_2'],
                        ratings_3=row['ratings_3'],
                        ratings_4=row['ratings_4'],
                        ratings_5=row['ratings_5'],
                        image_url=row['image_url'],
                    )
                )
                
                # Bulk insert in batches to save memory
                if len(objs) >= batch_size:
                    Books.objects.bulk_create(objs)
                    objs = []
                    
            # Catch remaining records
            if objs:
                Books.objects.bulk_create(objs)

        self.stdout.write(self.style.SUCCESS('Successfully imported all CSV data!'))