## DataExtract AI

This application utilizes the artificial intelligence model of Google Gemini, for which a key is required. The key can be created in [Google AI Studio](https://ai.google.dev/gemini-api/docs) as described in the Google [documentation](https://aistudio.google.com/app/apikey) .

In addition, it uses the url of a Power BI report embedded. The embedded report can be created by following the steps in [Microsoft Learn](https://learn.microsoft.com/en-us/fabric/security/service-admin-row-level-security)

### Local configuration
### Frontend

1. Set up local environment

- Enter the frontend folder with `cd .\frontend\`
- Create .env file at the project root, the same folder where package.json is located.
- Add required variables to .env file like the example below, replace urls with smart copilot project host.
```
BUILD_PATH = './build'
REACT_APP_API_HOST='127.0.0.1'
REACT_APP_API_HOST_PORT='8000'
REACT_APP_API_HOST_EXT='backend/v1'
REACT_APP_EMBED_URL='Power_BI_Embed_Url'
BROWSER = None
```
2. Install dependencies

- Install the dependencies with `npm install`.

3. Start project

- Execute the project with `npm start`.

### Backend

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
