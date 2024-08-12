## Docker compose deployment

1. Go to deployment folder
2. Set up environment
   1. Set up build environment
      - create .env file at the deployment folder, the same folder where docker-compose.yml is located
      - add required variables to backend.env file like the example below:
      ```
      DATABASE_ENGINE="django.db.backends.sqlite3"
      DATABASE_NAME="db.sqlite3"
      DATABASE_USER="postgres"
      DATABASE_PASSWORD="postgres"
      DATABASE_HOST=127.0.0.1
      DATABASE_PORT="5432"
      GEMINI_API_KEY="Secret_Api_Key"
      ```
   2. Set React environment   
      - create react.env file at the deployment folder, the same folder where docker-compose.yml is located
      - add required variables to react.env file like the example below:
      ```
      BUILD_PATH = './build'
      REACT_APP_API_HOST='127.0.0.1'
      REACT_APP_API_HOST_PORT='8000'
      REACT_APP_API_HOST_EXT='backend/v1'
      REACT_APP_EMBED_URL='Power_BI_Embed_Url'
      BROWSER = None
      ```

3. Build docker compose
   ```
   docker-compose build --no-cache
   ```
4. Start docker compose
   ```
   docker-compose --env-file ./backend.env up
   ```
