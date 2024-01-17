<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from './MenuItem.vue'

const router = useRouter()

const rootRoute = router.getRoutes().find((item) => item.name === 'root')

const isCollapse = ref(false)

const selectMenu = (routeName: string) => {
  router.push({ name: routeName })
}

const clickAAA = () => {
  console.log('clickAAA')
}
</script>

<template>
  <div class="menu-wrap">
    <el-radio-group v-model="isCollapse" style="padding: 20px">
      <el-radio-button :label="false" @click="clickAAA()">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      active-text-color="#D885FF"
      background-color="#545c64"
      :default-active="router.currentRoute.value.name"
      text-color="#fff"
      :collapse="isCollapse"
      @select="selectMenu"
    >
      <template v-for="(mainitem, mainIndex) in rootRoute?.children" :key="mainIndex">
        <el-sub-menu v-if="mainitem.meta?.sidebar && mainitem.children" :index="mainitem.name">
          <template #title>
            <MenuItem
              :icon-name="mainitem.meta.sidebar.icon"
              :title-text="mainitem.meta.sidebar.title"
            />
          </template>
          <template v-for="(subitem, subindex) in mainitem.children" :key="subindex">
            <el-menu-item v-if="subitem.meta?.sidebar" :index="subitem.name">
              <template #title>
                <MenuItem
                  :icon-name="subitem.meta.sidebar.icon"
                  :title-text="subitem.meta.sidebar.title"
                />
              </template>
            </el-menu-item>
          </template>
        </el-sub-menu>
        <template v-else-if="mainitem.meta?.sidebar && !mainitem.children">
          <el-menu-item :index="mainitem.name">
            <template #title>
              <MenuItem
                :icon-name="mainitem.meta.sidebar.icon"
                :title-text="mainitem.meta.sidebar.title"
              />
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style scoped>
.menu-wrap {
  border: 3px solid blue;
}
</style>
