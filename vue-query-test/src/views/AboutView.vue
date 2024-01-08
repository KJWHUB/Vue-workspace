<script setup lang="ts">
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { createPost, getPosts, QUERY_KEY, type Post, deletePost } from '@/api/post'
import RedText from '@/components/RedText.vue'
import TableActions from '@/components/TableActions.vue'
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const temp = {
  title: 'Do Laundry',
  content: 'Do the laundry before 5pm',
  permit: false
}

const column = [
  {
    id: 'ID',
    prop: 'id',
    label: 'ID',
    width: '180'
  },
  {
    id: 'TITLE',
    prop: 'title',
    label: 'Name',
    width: '180'
  },
  {
    id: 'CONTENT',
    prop: 'content',
    label: 'Content',
    render: RedText
  },
  {
    id: 'OPERATIONS',
    label: 'Operations',
    render: TableActions
  }
]

// Access QueryClient instance
const queryClient = useQueryClient()

// Query
const { isFetching, isError, data, error } = useQuery({
  queryKey: [QUERY_KEY],
  queryFn: getPosts
})

// Mutation
const createMutation = useMutation({
  mutationFn: createPost,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    ElMessage.success({ message: '컨텐츠를 등록 했습니다.' })
  }
})
const deleteMutation = useMutation({
  mutationFn: deletePost,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    ElMessage.success({ message: '컨텐츠를 삭제 했습니다.' })
  }
})

const multipleSelection = ref<Post[]>([])

const onDeleteButtonClick = (id: number) => {
  deleteMutation.mutate(id)
}
const onAddButtonClick = () => {
  createMutation.mutate(temp)
}

const handleSelectionChange = (val: Post[]) => {
  multipleSelection.value = val
}
</script>

<template>
  <div
    class="about"
    style="display: flex; flex-direction: column; justify-content: center; align-items: center"
  >
    <RedText v-if="isError" :text="`Error: ${error && error.message}`" />
    <el-space>
      <el-button @click="onAddButtonClick" :loading="createMutation.isPending.value" type="primary"
        >Add Post
      </el-button>
    </el-space>

    <hr style="margin: 20px 0; width: 100%" />

    <!-- table -->
    <el-card style="width: 100%" body-style="padding: 0">
      <el-table
        :data="data"
        :border="true"
        v-loading="isFetching"
        :header-row-style="{ color: '#161616' }"
        :header-cell-style="{ 'background-Color': '#eee' }"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" />
        <el-table-column
          v-for="(col, i) in column"
          :key="i"
          :prop="col.prop"
          :label="col.label"
          :width="col.width"
        >
          <template v-if="col.render" #default="{ row }">
            <!-- 
              장점: 
                - 가독성에 도움이 된다
                - 디버깅이 쉽다
              단점:
                - 코드 수가 늘어난다
             -->
            <template v-if="col.id === 'CONTENT'">
              <RedText :text="row.content" />
            </template>
            <template v-if="col.id === 'OPERATIONS'">
              <TableActions
                :action="() => onDeleteButtonClick(row.id)"
                :loading="deleteMutation.isPending.value"
              />
            </template>

            <!-- 
              장점: 
                - 컴포넌트를 재사용 할 수 있다.
                - 코드 수가 줄어든다
              단점:
                - 가독성 저하
                - 디버깅이 어려워진다.
             -->
            <!-- <component
              :is="col.render"
              :text="col.label === 'Content' ? row.content : null"
              :action="col.label === 'Operations' ? () => onDeleteButtonClick(row.id) : null"
              :loading="col.label === 'Operations' ? deleteMutation.isPending.value : null"
            /> -->
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
