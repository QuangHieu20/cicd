<template>
  <div class="about">
    <h1>📋 Về Dự Án</h1>
    <div class="info-card">
      <h2>🚀 Công nghệ sử dụng</h2>
      <div class="tech-stack">
        <div class="tech-item">
          <h3>Backend</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>TypeScript</li>
            <li>CORS</li>
          </ul>
        </div>
        <div class="tech-item">
          <h3>Frontend</h3>
          <ul>
            <li>Vue 3</li>
            <li>TypeScript</li>
            <li>Vite</li>
            <li>Vue Router</li>
            <li>Pinia</li>
            <li>Axios</li>
          </ul>
        </div>
      </div>
    </div>
    
    <div class="info-card">
      <h2>📁 Cấu trúc dự án</h2>
      <pre class="file-structure">
📁 project-root/
├── 📁 backend/
│   ├── 📁 src/
│   │   ├── 📁 routes/
│   │   ├── 📁 controllers/
│   │   ├── 📁 middleware/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── package.json
│   └── tsconfig.json
└── 📁 frontend/
    ├── 📁 src/
    │   ├── 📁 components/
    │   ├── 📁 views/
    │   ├── 📁 stores/
    │   ├── 📁 services/
    │   └── 📁 router/
    ├── package.json
    └── vite.config.ts
      </pre>
    </div>
    
    <div class="info-card">
      <h2>🛠️ Cách chạy dự án</h2>
      <div class="commands">
        <div class="command-section">
          <h3>Backend:</h3>
          <code>cd backend && npm run dev</code>
          <p>Chạy trên: http://localhost:3000</p>
        </div>
        <div class="command-section">
          <h3>Frontend:</h3>
          <code>cd frontend && npm run dev</code>
          <p>Chạy trên: http://localhost:5173</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Component logic here
</script>

<style scoped>
.about {
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
}

.info-card {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.tech-stack {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.tech-item {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.tech-item h3 {
  margin-top: 0;
  color: #007bff;
}

.tech-item ul {
  list-style-type: none;
  padding: 0;
}

.tech-item li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #e9ecef;
}

.tech-item li:last-child {
  border-bottom: none;
}

.file-structure {
  background: #2d3748;
  color: #e2e8f0;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  line-height: 1.6;
}

.commands {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 1rem;
}

.command-section {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #28a745;
}

.command-section h3 {
  margin-top: 0;
  color: #28a745;
}

.command-section code {
  display: block;
  background: #2d3748;
  color: #e2e8f0;
  padding: 1rem;
  border-radius: 4px;
  margin: 1rem 0;
  font-family: 'Courier New', monospace;
}

.command-section p {
  margin: 0;
  color: #6c757d;
  font-style: italic;
}

@media (max-width: 768px) {
  .tech-stack,
  .commands {
    grid-template-columns: 1fr;
  }
}
</style>


