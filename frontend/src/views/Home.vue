<template>
  <div class="home">
    <h1>🏠 Trang Chủ</h1>
    <div class="api-section">
      <h2>Kết nối API</h2>
      <button @click="fetchMessage" :disabled="loading" class="btn btn-primary">
        {{ loading ? 'Đang tải...' : 'Lấy tin nhắn từ Backend' }}
      </button>
      
      <div v-if="message" class="message success">
        <h3>📨 Tin nhắn từ Backend:</h3>
        <p>{{ message }}</p>
      </div>
      
      <div v-if="error" class="message error">
        <h3>❌ Lỗi:</h3>
        <p>{{ error }}</p>
      </div>
    </div>
    
    <div class="echo-section">
      <h2>Test Echo API</h2>
      <input 
        v-model="echoInput" 
        placeholder="Nhập tin nhắn để echo..."
        class="input"
      />
      <button @click="sendEcho" :disabled="loading" class="btn btn-secondary">
        Gửi Echo
      </button>
      
      <div v-if="echoResponse" class="message info">
        <h3>🔄 Phản hồi Echo:</h3>
        <pre>{{ JSON.stringify(echoResponse, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore } from '../stores/main'

const store = useMainStore()
const { message, loading, error } = storeToRefs(store)

const echoInput = ref('')
const echoResponse = ref(null)

const fetchMessage = async () => {
  await store.fetchHello()
}

const sendEcho = async () => {
  if (!echoInput.value.trim()) return
  
  try {
    const response = await store.sendEcho({ message: echoInput.value })
    echoResponse.value = response
    echoInput.value = ''
  } catch (err) {
    console.error('Echo error:', err)
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

.api-section, .echo-section {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  margin: 0.5rem;
  transition: background-color 0.3s;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background: #0056b3;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover:not(:disabled) {
  background: #545b62;
}

.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.input {
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 300px;
  margin-right: 1rem;
}

.message {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 4px;
}

.success {
  background: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.error {
  background: #f8d7da;
  border: 1px solid #f5c6cb;
  color: #721c24;
}

.info {
  background: #d1ecf1;
  border: 1px solid #bee5eb;
  color: #0c5460;
}

pre {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
}
</style>


