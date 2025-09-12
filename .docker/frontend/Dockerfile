# Build stage
FROM node:20-alpine AS builder
LABEL authors="nguyenquanghieu"

WORKDIR /app

# Build arguments
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Copy package.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build production files with environment variables
RUN npm run build

# Production stage
FROM nginx:alpine AS production
LABEL authors="nguyenquanghieu"

# Copy built files to nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]