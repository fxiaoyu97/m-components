<template>
  <el-container>
    <el-aside width="auto">
      <el-menu default-active="2" class="el-menu-vertical-demo" :collapse="isCollapse">
        <el-menu-item index="1">
          <el-icon><el-icon-menu /></el-icon>
          <span>导航一</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><el-icon-document /></el-icon>
          <span>导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><el-icon-setting /></el-icon>
          <span>导航三</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggle">
          <el-icon-expand v-if="isCollapse"></el-icon-expand>
          <el-icon-fold v-else></el-icon-fold>
        </span>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
let isCollapse = ref(false)
let toggle = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
