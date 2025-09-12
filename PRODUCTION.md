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

## 🔧 Setup SSL trên VPS trước khi deploy:

### 1. Cài đặt Certbot trên VPS:
```bash
sudo apt update
sudo apt install certbot -y
```

### 2. Tạo SSL certificate:
```bash
sudo certbot certonly --standalone -d todonest.id.vn -d www.todonest.id.vn
```

### 3. Kiểm tra certificate:
```bash
sudo ls -la /etc/letsencrypt/live/todonest.id.vn/
# Phải có: fullchain.pem, privkey.pem
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
- **Frontend:** https://todonest.id.vn
- **Backend API:** https://todonest.id.vn/api
- **Health Check:** https://todonest.id.vn/health

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
