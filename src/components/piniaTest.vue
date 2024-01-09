<template>
  <div>{{ count }}</div>
  <div>{{ name }}</div>
  <div>{{ address }}</div>
  <el-button @click="add">自增</el-button>
</template>
<script lang="ts" setup>
import { useCounterStore, userAddressStore } from '@/stores/counter.js'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const addressStore = userAddressStore()
const { address } = storeToRefs(addressStore)

const { increment } = store
const { count, name } = storeToRefs(store)

const add = () => {
  increment()
  name.value = '测试'
  address.value = '杭州'
}
</script>
