FROM python:3.10-slim

# Install dependencies required by psycopg2 and other packages
RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory
WORKDIR /app

# Copy the requirements.txt first to install dependencies
COPY requirements.txt /app/

# Install Python dependencies inside the container
RUN apt-get update && apt-get install -y gcc libpq-dev

RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the Django project files into the container
#COPY . /app/

# Expose the port Django will run on
EXPOSE 8000

# Command to run Django when the container starts
CMD ["watchmedo", "auto-restart", "--patterns=*.py", "--recursive", "--", "python", "/app/manage.py", "runserver", "0.0.0.0:8000"]
