import { defineStore } from 'pinia'
import { ref } from 'vue'
import { apiService } from '../services/api'

export const useMainStore = defineStore('main', () => {
  // State
  const message = ref<string>('')
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  // Actions
  const fetchHello = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await apiService.getHello()
      message.value = response.data.message
    } catch (err: any) {
      error.value = err.message || 'Có lỗi xảy ra khi gọi API'
    } finally {
      loading.value = false
    }
  }

  const sendEcho = async (data: any) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await apiService.postEcho(data)
      return response.data
    } catch (err: any) {
      error.value = err.message || 'Có lỗi xảy ra khi gửi dữ liệu'
      throw err
    } finally {
      loading.value = false
    }
  }

  return {
    message,
    loading,
    error,
    fetchHello,
    sendEcho
  }
})


