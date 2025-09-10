<template>
  <div id="app">
    <header>
      <h1>🚀 CI/CD Demo App</h1>
    </header>
    
    <main>
      <div class="card">
        <h2>Frontend Status</h2>
        <p>✅ Vue.js app is running</p>
        <p>Version: 1.0.0</p>
        <p><strong>API URL:</strong> {{ apiUrl }}</p>
      </div>

      <div class="card">
        <h2>Backend Connection</h2>
        <button @click="testBackend" :disabled="loading">
          {{ loading ? 'Testing...' : 'Test Backend' }}
        </button>
        <div v-if="backendStatus" class="status">
          <p>{{ backendStatus }}</p>
        </div>
      </div>

      <div class="card">
        <h2>API Test aaaa</h2>
        <input v-model="message" placeholder="Enter message" />
        <button @click="sendMessage" :disabled="loading">Send</button>
        <div v-if="response" class="response">
          <pre>{{ response }}</pre>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      loading: false,
      backendStatus: '',
      message: 'Hello from frontend!',
      response: '',
      apiUrl: this.getApiUrl()
    }
  },
  methods: {
    async testBackend() {
      this.loading = true;
      try {
        const response = await fetch(`${this.apiUrl}/api/hello`);
        const data = await response.json();
        this.backendStatus = `✅ Backend connected: ${data.message}`;
      } catch (error) {
        this.backendStatus = `❌ Backend error: ${error.message}`;
      }
      this.loading = false;
    },
    
    getApiUrl() {
      // Auto-detect environment
      const envUrl = import.meta.env.VITE_API_URL;
      if (envUrl) return envUrl;
      
      // Fallback: detect by hostname
      const hostname = window.location.hostname;
      if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'http://localhost:3000';
      } else {
        return `http://${hostname}:3000`;
      }
    },
    
    async sendMessage() {
      this.loading = true;
      try {
        const response = await fetch(`${this.apiUrl}/api/echo`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: this.message })
        });
        const data = await response.json();
        this.response = JSON.stringify(data, null, 2);
      } catch (error) {
        this.response = `Error: ${error.message}`;
      }
      this.loading = false;
    }
  },
  mounted() {
    console.log('API URL:', this.apiUrl);
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  background: #f5f5f5;
}

#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

header {
  text-align: center;
  margin-bottom: 30px;
}

h1 {
  color: #2c3e50;
  font-size: 2.5rem;
}

.card {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h2 {
  color: #34495e;
  margin-bottom: 15px;
}

button {
  background: #3498db;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background: #2980b9;
}

button:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
}

.status, .response {
  margin-top: 15px;
  padding: 10px;
  background: #ecf0f1;
  border-radius: 5px;
}

pre {
  white-space: pre-wrap;
  font-size: 14px;
}
</style>