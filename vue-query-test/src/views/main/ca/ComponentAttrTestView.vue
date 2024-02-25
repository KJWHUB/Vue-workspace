<script setup lang="ts">
import AttrsTestComponent from '@/components/AttrsTestComponent.vue'
import BasicInput from '@/components/FormItem/BasicInput.vue'
import { ref } from 'vue'

// vue는 기본적으로 $attrs를 사용하여 부모로부터 받은 속성이 root 태그에 자동으로 적용 된다.
// emit 으로 설정하지 않은 네이티브 이벤트들은 그대로 사용가능

const changeF = (v) => {
  console.log('changeF', v)
}

const inputValue = ref()
</script>

<template>
  <div>
    <p>test</p>
    <AttrsTestComponent style="background-color: blanchedalmond" text="aaaaaa" @click="changeF" />

    <hr style="margin: 20px" />
    <small>inputValue: {{ inputValue }}</small>

    <BasicInput v-model="inputValue">
      <template #prepend>
        <span>prepend</span>
      </template>
      <template #append>
        <span>append</span>
      </template>
    </BasicInput>

    {{ () => 11 }}
  </div>
</template>

<style scoped></style>
