<script lang="ts" setup>
import { useTokenStore } from '@/stores/auth/token'
import { Setting } from '@element-plus/icons-vue'

const { logout } = useTokenStore()
</script>

<template>
  <el-row class="header" justify="space-between" align="middle">
    <el-col :span="4">
      <div class="logo">Element</div>
    </el-col>
    <el-col :span="4">
      <el-dropdown>
        <el-icon size="24" color="#fff"><Setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.header {
  height: 100%;
  border: 3px solid red;
  background-color: #545c64;
  color: #fff;
}

.logo {
  font-size: 30px;
  font-weight: 900;
  text-align: center;
}
</style>
