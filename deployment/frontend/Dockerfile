FROM node:alpine

WORKDIR /app

COPY ./frontend/package*.json /app/

RUN npm install

COPY ./frontend/public /app/public/
COPY ./frontend/src /app/src/
COPY ./frontend/jsconfig.json /app/
COPY ./deployment/frontend.env /app/.env

RUN rm -r ./src
RUN rm ./package*.json
RUN rm ./jsconfig.json
RUN rm ./.env

CMD [ "npm", "run", "build" ]

# COPY ./frontend/build /app/build/