<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import { useMutation } from '@tanstack/vue-query'
import { getLogin } from '@/api/auth/login'

interface FormData {
  id: string
}

// Mutation
const loginMutation = useMutation({
  mutationFn: getLogin,
  onSuccess: (data) => {
    console.log('로그인에 성공했습니다.')
    console.log('get data :', data)
  },
  onError: (error) => {
    console.log('로그인에 실패했습니다.')
    console.log('get error :', error)
  }
})

const formRef = ref<FormInstance>()
const formData = reactive<FormData>({
  id: ''
})
const formRules = reactive<FormRules<FormData>>({
  id: [
    { required: true, message: 'ID를 입력하세요', trigger: 'blur' },
    { min: 3, max: 10, message: '3~10자리의 문자열을 입력하세요', trigger: 'blur' }
  ]
})
const formCheck = async (formEl: FormInstance | undefined): Promise<boolean> => {
  // ref 연결 검증
  if (!formEl) {
    ElMessage.error('form instance is not ready')
    return false
  }
  // 유효성 검사
  return await formEl.validate((valid, fields) => {
    console.log('valid', valid, 'fields', fields)
    if (valid) {
      console.log('submit!')
    } else {
      ElMessage.error('유효성 검사에 실패했습니다.')
      ElMessage.error('error : ' + JSON.stringify(fields))
      console.log('error submit!', fields)
    }
  })
}
const submit = async () => {
  // 1. 유효성 검사
  if (!(await formCheck(formRef.value))) return

  // 2. 서버에 로그인 요청
  loginMutation.mutate(formData.id)

  // 1. 서버에서 토큰을 받아온다.
  // 2. 토큰을 쿠키에 저장한다.
  console.log('login')
}
</script>

<template>
  <div>
    <h1>Auth</h1>
    <el-form ref="formRef" :model="formData" :rules="formRules">
      <el-form-item label="ID" prop="id">
        <el-input v-model="formData.id" placeholder="문자열을 입력하세요" />
      </el-form-item>
      <el-button type="primary" @click="submit">Login</el-button>
    </el-form>
  </div>
</template>

<style scoped></style>
