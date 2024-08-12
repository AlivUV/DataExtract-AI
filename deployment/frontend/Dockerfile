FROM node:alpine

WORKDIR /app

COPY ./frontend/package*.json /app/

RUN npm install

COPY ./frontend/public /app/public/
COPY ./frontend/src /app/src/
COPY ./frontend/jsconfig.json /app/
COPY ./deployment/react.env /app/.env


CMD [ "npm", "run", "build" ]

# COPY ./frontend/build /app/build/