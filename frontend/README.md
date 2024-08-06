### Local development

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