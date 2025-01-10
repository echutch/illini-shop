# illini-shop

## Dev Environment

To build the container, run
```
docker compose build (only need to do this once)
```

To start, run 
```
docker compose up (full stack)
docker compose up frontend (just frontend)
docker compose up backend db (just backend)
```
Open a remote window (bottom left corner), and attach to running container.

When finished, run
```
docker compose down
```


## Backend Setup

Run all commands in backend container. To start, get the .env file credentials to access the Django app. On first startup of backend, run
```
python manage.py migrate
```
to set up the backend database connection. To gain admin credentials, run
```
python manage.py createsuperuser
```
and create a username and password.
