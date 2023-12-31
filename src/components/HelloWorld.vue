<template>
  <div class="page">
    <div class="flex">
      <div>
        <el-button type="success" @click="drawer = true" plain
          >Success</el-button
        >
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </div>
      <div>
        <el-icon @click="toggleDark" style="color: #b8bcc3; cursor: pointer"
          ><Sunny
        /></el-icon>
      </div>
    </div>
    <el-divider />
    <div>
      <el-select
        v-model="selectvalue"
        class="m-2"
        placeholder="Select"
        size="large"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
    </div>
    <el-divider />
    <div>默认文字颜色Vue starter</div>
    <span class="txt">自定义类名</span>
    <el-divider />
    <div>
      <el-table :data="tableData">
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="address" label="Address" />
      </el-table>
    </div>

    <el-drawer
      v-model="drawer"
      title="I am the title"
      :with-header="false"
      size="50%"
    >
      <el-watermark :font="font" :content="font.content">
        <el-form
          :model="formInline"
          label-width="50"
          style="display: flex; flex-wrap: wrap"
        >
          <el-col :xs="15" :sm="10" :md="11" :lg="12" :xl="12">
            <el-form-item label="Ap">
              <el-input
                v-model="formInline.user"
                placeholder="Ap"
                clearable
                class="length"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="15" :sm="10" :md="11" :lg="12" :xl="12">
            <el-form-item label="Ap">
              <el-input
                v-model="formInline.user"
                placeholder="Ap"
                clearable
                class="length"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="15" :sm="10" :md="11" :lg="12" :xl="12">
            <el-form-item label="Ap">
              <el-input
                v-model="formInline.user"
                placeholder="Ap"
                clearable
                class="length"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="15" :sm="10" :md="11" :lg="12" :xl="12">
            <el-form-item label="Ap">
              <el-input
                v-model="formInline.user"
                placeholder="Ap"
                clearable
                class="length"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="15" :sm="10" :md="11" :lg="12" :xl="12">
            <el-form-item label="Ap">
              <el-input
                v-model="formInline.user"
                placeholder="Ap"
                clearable
                class="length"
              />
            </el-form-item>
          </el-col>
          <el-col :xs="15" :sm="10" :md="11" :lg="12" :xl="12">
            <el-form-item>
              <el-button type="primary">Query</el-button>
            </el-form-item>
          </el-col>
        </el-form>
      </el-watermark>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { toggleDark } from './dark.js'
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const font = reactive({
  content: '王正博',
  color: 'rgba(0, 0, 0, .15)',
})
const drawer = ref(false)
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const selectvalue = ref('')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
<style>
.length {
  width: 100px !important;
}
.page {
  display: flex;
  flex-direction: column;
}
.page .flex {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
.txt {
  color: #67c23a;
}
</style>
