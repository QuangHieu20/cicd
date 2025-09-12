# 🚀 Production Deployment với SSL

## 📋 Cấu trúc files:

```
📁 .docker/
├── nginx/
│   ├── nginx.conf          # Development (HTTP)
│   └── nginx.prod.conf     # Production (HTTPS + SSL)
├── docker-compose.yml      # Development
└── docker-compose.prod.yml # Production (với SSL)
```

## 🔧 Setup VPS Nginx proxy trước khi deploy:

### 1. Chạy script setup:
```bash
chmod +x setup-vps-nginx.sh
./setup-vps-nginx.sh
```

### 2. Hoặc setup thủ công:
```bash
# Cài Nginx và Certbot
sudo apt install nginx certbot python3-certbot-nginx -y

# Tạo config proxy đến Docker
sudo nano /etc/nginx/sites-available/todonest.id.vn

# Enable site
sudo ln -sf /etc/nginx/sites-available/todonest.id.vn /etc/nginx/sites-enabled/
sudo systemctl restart nginx

# Tạo SSL
sudo certbot --nginx -d todonest.id.vn
```

## 🚀 Deployment:

### Development (Local):
```bash
docker-compose up -d
# URLs: http://localhost:8080
```

### Production (VPS với SSL):
```bash
docker-compose -f docker-compose.prod.yml up -d
# URLs: https://todonest.id.vn
```

## 🌐 URLs sau deployment:

### Development:
- **Frontend:** http://localhost:5173 (Vite dev)
- **Backend:** http://localhost:3000
- **Nginx:** http://localhost:8080

### Production:
- **Frontend:** https://todonest.id.vn (VPS Nginx → Docker)
- **Backend API:** https://todonest.id.vn/api
- **Health Check:** https://todonest.id.vn/health
- **Docker Nginx:** http://localhost:8080 (internal)

## 🔒 SSL Features:

- ✅ **Auto HTTP → HTTPS redirect**
- ✅ **SSL certificate** mount từ VPS
- ✅ **Security headers** đầy đủ
- ✅ **HSTS** enabled
- ✅ **Gzip compression**
- ✅ **CORS** configured

## 📋 CI/CD Process:

1. **Push code** → GitHub
2. **GitHub Actions** trigger
3. **Build images** với production target
4. **Deploy** với `docker-compose.prod.yml`
5. **SSL** tự động hoạt động từ VPS certificate

## 🔧 Maintenance:

### Renewal SSL certificate:
```bash
sudo certbot renew
docker-compose -f docker-compose.prod.yml restart nginx
```

### Check logs:
```bash
docker-compose -f docker-compose.prod.yml logs nginx
docker-compose -f docker-compose.prod.yml logs backend
```
