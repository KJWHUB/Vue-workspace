<script setup lang="ts">
import { createPost, QUERY_KEY } from '@/api/post'
import { useQueryClient, useMutation } from '@tanstack/vue-query'
import { ElMessage, type FormInstance } from 'element-plus'
import { reactive, ref } from 'vue'

// Access QueryClient instance
const queryClient = useQueryClient()

// Mutation
const createMutation = useMutation({
  mutationFn: createPost,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    ElMessage.success({ message: '컨텐츠를 등록 했습니다.' })
  }
})

const formRef = ref<FormInstance>()
const formData = reactive({
  title: '',
  content: '',
  permit: false
})

const onSubmit = async () => {
  submitForm(formRef.value)
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  return formEl.validate((valid, fields) => {
    if (valid) {
      console.log('유효성 검사 성공!')
      createMutation.mutate(formData)
    } else {
      console.log('유효성 검사 실패!', fields)
      return ElMessage.error({ message: '유효성 검사에 실패했습니다.' })
    }
  })
}
</script>

<template>
  <div>
    <el-form ref="formRef" :model="formData" label-position="left" label-width="100px">
      <el-form-item label="permit">
        <el-switch v-model="formData.permit" />
      </el-form-item>
      <CustomInput label="Title" v-model="formData.title" v-model:permit="formData.permit" />
      <el-form-item label="Content">
        <el-input v-model="formData.content" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped></style>
