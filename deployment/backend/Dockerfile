FROM python:3.11.9-alpine3.20

WORKDIR /app

RUN pip install --upgrade pip

COPY ./backend/requirements.txt .

RUN apk add --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev

RUN pip install -r requirements.txt

# COPY ./backend /app/
COPY ./backend/applicants /app/applicants
COPY ./backend/assistant /app/assistant
COPY ./backend/backend /app/backend
COPY ./backend/users /app/users
COPY ./backend/manage.py /app/manage.py
COPY ./deployment/backend.env /app/.env
COPY ./deployment/backend/entrypoint.sh .

RUN python manage.py makemigrations
RUN python manage.py migrate --noinput

RUN python manage.py createsuperuser --noinput


ENTRYPOINT ["sh", "/app/entrypoint.sh"]