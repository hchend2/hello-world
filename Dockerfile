#use a lightweight base image, such as nginx
FROM nginx:alpine

# Set the working directory
WORKDIR /usr/share/nginx/html

# Copy the static files from the build context to the container
COPY . .

# Expose the port that the application will run on
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]