# Development stage
FROM node:20-alpine AS development
LABEL authors="nguyenquanghieu"

WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install && npm cache clean --force

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start with nodemon for hot reload
CMD ["npm", "run", "dev"]

# Production stage
FROM node:20-alpine AS production
LABEL authors="nguyenquanghieu"

WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production && npm cache clean --force

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

# Start production server
CMD ["npm", "start"]