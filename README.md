# 🚀 CI/CD Demo Project

Dự án full-stack đơn giản để học CI/CD với Docker.

## 🛠️ Tech Stack

### Backend
- **Node.js 20** + **Express** + **JavaScript**
- **dotenv** - Environment variables

### Frontend  
- **Vue 3** + **JavaScript** + **Vite**
- **Environment variables** với VITE_ prefix

### DevOps
- **Docker** + **Docker Compose**
- **Nginx** - Reverse proxy
- **Alpine Linux** - Base images
- **Ubuntu 22.04.5 LTS** - Host OS

## 📁 Cấu trúc

```
📁 backend/           # Node.js API
📁 frontend/          # Vue 3 app  
📁 .docker/           # Docker configs
└── docker-compose.yml    # Single compose file
```

## 🚀 Lệnh chạy

### Docker (Recommended)
```bash
# Chạy tất cả services
docker-compose up -d

# Rebuild khi cần
docker-compose build --no-cache

# Dừng
docker-compose down
```

### Local Development
```bash
# Backend
cd backend && npm install && npm run dev

# Frontend  
cd frontend && npm install && npm run dev
```

## 🌐 URLs

### Development Mode
- **Frontend**: http://localhost:5173 (Vite HMR)
- **Backend**: http://localhost:3000 (Nodemon)
- **Nginx**: http://localhost:8080 (Proxy)

### Production Mode
- **Frontend**: http://localhost:80 (Static)
- **Backend**: http://localhost:3000 (Production)
- **Nginx**: http://localhost:8080 (Proxy)

## 📋 API Endpoints

- `GET /health` - Health check
- `GET /api/hello` - Hello message
- `POST /api/echo` - Echo request body

## 🔧 Environment Variables

### Backend (.env)
```env
PORT=3000
NODE_ENV=development
API_VERSION=1.0.0
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:3000
```

## ✨ Features

- ✅ **Hot reload** trong development mode
- ✅ **Volume mounts** cho live code sync
- ✅ **Multi-stage builds** cho production
- ✅ **Nginx reverse proxy**
- ✅ **Environment configuration**
- ✅ **Lightweight Alpine images**

---

**Perfect for learning CI/CD! 🎯**