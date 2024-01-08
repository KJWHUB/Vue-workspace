<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{
  label: string
}>()
const value = defineModel<string>()
const permit = defineModel<boolean>('permit')

const sliderValue = ref(0)
const sliderText = computed(() => 'sliderText: ' + sliderValue.value)

const onChagePermit = () => {
  permit.value = !permit.value
}

const customValidFn = (rule: any, value: string, callback: any) => {
  // 영어만 입력가능한 정규식
  const regExp = /^[a-zA-Z]*$/
  if (!regExp.test(value)) {
    callback(new Error('특수문자는 입력할 수 없습니다.'))
  } else {
    callback()
  }
}

// 앞선 번호가 먼저 유효성 검사 실행되어 리턴됨
const textRule = [
  { required: true, message: 'Please input Activity name', trigger: 'blur' },
  { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  { validator: customValidFn, trigger: 'blur' }
]
</script>

<template>
  <el-form-item :label="label" :rules="textRule" prop="title">
    <el-input v-model="value" :disabled="permit" />
  </el-form-item>
  <el-form-item label="changePermit">
    <el-button @click="onChagePermit">change</el-button>
  </el-form-item>
  <el-form-item label="test slider">
    <el-slider v-model="sliderValue" />
    {{ sliderText }}
  </el-form-item>
</template>

<style scoped></style>
