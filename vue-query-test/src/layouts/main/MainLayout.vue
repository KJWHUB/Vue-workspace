<script lang="ts" setup>
import DefaultHeader from './components/DefaultHeader.vue'
import SideBar from './components/SideBar.vue'
</script>

<template>
  <div class="main-layout">
    <el-container>
      <el-header style="padding: 0">
        <DefaultHeader />
      </el-header>
      <el-container>
        <el-aside :width="200">
          <SideBar />
        </el-aside>
        <el-main style="border: 3px solid yellow">
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
