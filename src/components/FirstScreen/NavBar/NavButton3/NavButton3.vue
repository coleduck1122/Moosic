<script setup lang="ts">
import { ref, defineProps } from 'vue';

// 通过 defineProps 获取传入的属性
const props = defineProps({
  iconName: String,    // 图标名称，例如 "mdi-heart" (Material Design 图标)
  buttonText: String   // 按钮下方的描述文字
});
</script>

<template>
  <v-btn class="icon-button">
    <div class="icon-container">
      <v-icon size="24">{{ iconName }}</v-icon>
      <span class="icon-text">{{ buttonText }}</span>
    </div>
  </v-btn>
</template>

<style scoped lang="scss">
.icon-button {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5px;
  transition: transform 0.3s; /* 添加 transform 过渡效果 */
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-text {
  //margin-top: 5px;
  font-size: 13.5px; /* 调整文本大小 */
}
/* 定义弹跳动画，仅应用于图标 */
.icon-button:hover {
  transform: translateY(-5px); /* 移动图标容器向上 */
}
</style>
