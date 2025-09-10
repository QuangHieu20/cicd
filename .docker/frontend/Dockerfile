# Build stage
FROM node:20-alpine AS builder
LABEL authors="nguyenquanghieu"

WORKDIR /app

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build production files
RUN npm run build

# Production stage
FROM nginx:alpine
LABEL authors="nguyenquanghieu"

# Copy built files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]