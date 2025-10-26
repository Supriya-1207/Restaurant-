# Step 1: Use a lightweight Node.js image
FROM node:18-alpine

# Step 2: Set working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and install dependencies
COPY package*.json ./
RUN npm install --production

# Step 4: Copy the rest of your project files
COPY . .

# Step 5: Expose port (optional, usually 3000 or 8080)
EXPOSE 3000

# Step 6: Start the app
CMD ["npm", "start"]
