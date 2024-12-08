# Use a Node.js image as the base image
FROM node:16

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --silent

# Copy the rest of the app's source code
COPY . .

# Expose the port React app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
