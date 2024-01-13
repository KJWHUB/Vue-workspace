<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'

import { useMutation } from '@tanstack/vue-query'
import { getLogin } from '@/api/auth/login'
import { setRefreshToken, removeRefreshToken } from '@/utils/cookie/index'

import { useTokenStore } from '@/stores/auth/token'

const tokenStore = useTokenStore()

console.log('login AuthToken 1', tokenStore.accessToken)

interface FormData {
  id: string
}

// Mutation
const loginMutation = useMutation({
  mutationFn: getLogin,
  onSuccess: (data) => {
    console.log('로그인에 성공했습니다.')
    console.log('get data :', data)
    // 리프레쉬토큰 쿠키에 저장
    setRefreshToken(data.refreshToken)
    // 액세스토큰 저장
    tokenStore.accessToken.setToken(data.accessToken)
    // 저장후 라우터 이동

    console.log('login AuthToken 2', tokenStore.accessToken)
  },
  onError: (error) => {
    removeRefreshToken()
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
const formCheck = async (formEl: FormInstance | undefined) => {
  // ref 연결 검증
  if (!formEl) {
    ElMessage.error('form instance is not ready')
    return false
  }

  // 유효성 검사
  await formEl.validate((valid, fields) => {
    console.log('valid', valid, 'fields', fields)
    if (valid) {
      // 서버에 로그인 요청
      loginMutation.mutate(formData.id)
      console.log('submit!')
    } else {
      ElMessage.error('유효성 검사에 실패했습니다.')
      ElMessage.error('error : ' + JSON.stringify(fields))
      console.log('error submit!', fields)
    }
  })
}
const submit = async () => {
  // 유효성 검사
  await formCheck(formRef.value)

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
