<script setup lang="ts"></script>

<template>
  <div class="auth-layout">
    <el-container>
      <el-header style="background-color: yellowgreen">
        <nav class="link-wrap">
          <RouterLink to="/">
            <el-button>Home</el-button>
          </RouterLink>
        </nav>
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </div>
</template>

<style lang="scss" scoped>
.link-wrap {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
