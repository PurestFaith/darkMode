import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(20)
  const name = ref('zhangsan')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

export const userAddressStore = defineStore('userAddress', () => {
  const address = ref('浙江')
  return {
    address,
  }
})
