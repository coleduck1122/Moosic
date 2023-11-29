<script setup lang="ts">
import { defineProps,  } from 'vue';

// 通过 defineProps 获取传入的属性
const props = defineProps({
  buttonText: String, // 按钮显示的文本作为 prop
  icon: String,
});
</script>

<template>
  <v-btn v-if="icon!=null" class="navBtn" :prepend-icon="icon" >
    {{ buttonText }}
  </v-btn>
  <v-btn v-else class="navBtn" >
    {{ buttonText }}
  </v-btn>
</template>

<style scoped lang="scss">
.navBtn {
  height: 30px;
  min-width: 100%;
  margin-bottom: 3px;

  border: none; /* 去掉按钮的边框 */
  background-color: transparent; /* 去掉按钮的背景色 */
  box-shadow: none; /* 去掉按钮的阴影 */

  /* 定义悬停样式 */
  transition: color 0.3s; /* 添加颜色的过渡效果 */
}
.navBtn:hover {
  color: #3FABE9; /* 设置悬停时的字体颜色为蓝色 */
}

.navBtn-text {
  height: 30px;
  padding: 5px;
  min-width: 30px;

  border: none; /* 去掉按钮的边框 */
  background-color: transparent; /* 去掉按钮的背景色 */
  box-shadow: none; /* 去掉按钮的阴影 */

  transition: transform 0.3s; /* 添加 transform 过渡效果 */
}
.navBtn-text:hover {
  transform: translateY(-5px); /* 移动图标容器向上 */
}

/* 取消悬停效果 */
.v-btn.v-btn--active::before,
.v-btn.v-btn--active::after {
  border: none !important;
  box-shadow: none !important;
}
/* 取消按钮悬停时的背景色效果 */
.v-btn.v-btn--active {
  background-color: transparent !important;
  color: inherit !important;
}
/* 取消点击效果 */
.v-btn.v-btn--active,
.v-btn:focus {
  box-shadow: none !important;
  color: #3FABE9; /* 设置悬停时的字体颜色为蓝色 */
}
</style>
