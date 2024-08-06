FROM python:3.11.9-alpine3.20

WORKDIR /app

RUN pip install --upgrade pip

COPY ./backend/requirements.txt .

RUN apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev

RUN pip install -r requirements.txt

COPY ./backend /app/
COPY ./deployment/backend.env /app/.env
COPY ./deployment/backend/entrypoint.sh .

ENTRYPOINT ["sh", "/app/entrypoint.sh"]