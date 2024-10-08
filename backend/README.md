### Local development

1. Set up local environment

- Enter the frontend folder with `cd .\backend\`
- Create .env file at the project root, the same folder where manage.py is located.
- Add required variables to .env file like the example below:
```
DATABASE_ENGINE="django.db.backends.sqlite3"
DATABASE_NAME="db.sqlite3"
DATABASE_USER="postgres"
DATABASE_PASSWORD="postgres"
DATABASE_HOST=127.0.0.1
DATABASE_PORT="5432"
GEMINI_API_KEY="Secret_Api_Key"
```

2. Install dependencies

- Install the dependencies with `pip install requirements.txt`.

3. Migrate database

- Execute the database migration with `python manage.py migrate`.

4. Start project

- Create an administrator user with `python manage.py createsuperuser`.

5. Start project

- Execute the project with `python manage.py runserver`.
