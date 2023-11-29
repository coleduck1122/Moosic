<template>
  <v-app-bar
    :elevation="3"
    rounded
    app
  >
    <template v-slot:prepend>
      <v-btn class="image-button">
        <img
          src="/src/assets/image/CreateCenter.png"
          alt="按钮图片"
          max-width="100%"
          max-height="100%"
        />
      </v-btn>
      <nav-button2 @click="navigateToHome" :button-text="'主站'" :icon="'mdi-television-classic'"></nav-button2>
    </template>

    <template v-slot:append>
      <v-btn icon="mdi-email-outline" class="UploadAppBarBtn"></v-btn>
      <v-btn icon="mdi-tray-arrow-down" class="UploadAppBarBtn"></v-btn>
    </template>
  </v-app-bar>

</template>

<script lang="ts" setup>
import NavButton2 from "@/components/FirstScreen/NavBar/NavButton2/NavButton2.vue";
import NavButton3 from "@/components/FirstScreen/NavBar/NavButton3/NavButton3.vue";

import { useRouter } from 'vue-router';
const router = useRouter();
const navigateToHome = () => {
  router.push({ name: 'Home' });
  // console.log(router.currentRoute.value.name);
}
</script>

<style scoped lang="scss">
.custom-upload-button {
  margin-left: 10px;
  border-radius: 10px;
  background-color: #F1739A; /* 自定义背景颜色 */
  color: white; /* 按钮文本颜色 */
  /* 其他样式设置 */
}
.image-button {
  padding: 0;
  background: none;
  border: none;
  width: 160px; /* 设置按钮宽度 */
  height: 50px; /* 设置按钮高度 */
}

.image-button img {
  max-width: 100%; /* 图片最大宽度为按钮宽度 */
  max-height: 100%; /* 图片最大高度为按钮高度 */
  display: block; /* 使图片成为块级元素 */
  width: 100%; /* 设置图片的宽度为100% */
  height: 100%; /* 设置图片的高度为100% */
}
.UploadAppBarBtn {
  margin-right: 15px;
}
</style>

