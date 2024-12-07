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
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the Django project files into the container
COPY . /app/

COPY wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

# Expose the port Django will run on
EXPOSE 8000

# Command to run Django when the container starts
CMD ["./wait-for-it.sh", "db:5432", "--", "python", "manage.py", "runserver", "0.0.0.0:8000"]
