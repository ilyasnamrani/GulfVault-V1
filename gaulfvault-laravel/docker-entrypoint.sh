#!/bin/sh

# Generate app key if not set
if [ -z "$APP_KEY" ]; then
    php artisan key:generate --no-interaction
fi

# Wait for DB to be ready
echo "Waiting for database..."
while ! nc -z host.docker.internal 3306; do
  sleep 1
done
echo "Database is up!"

# Run migrations
php artisan migrate --force

# Start the application
php artisan serve --host=0.0.0.0 --port=8000
