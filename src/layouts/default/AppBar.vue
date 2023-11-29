<template>
  <v-app-bar
    :elevation="3"
    rounded
    app
  >
    <template v-slot:prepend>
      <nav-button2 :button-text="'首页'" :icon="'mdi-television-classic'" @click="navigateToHome"></nav-button2>
      <nav-button2 :button-text="'番剧'" @click="navigateToAnime"></nav-button2>
      <nav-button2 :button-text="'直播'"></nav-button2>
      <nav-button2 :button-text="'游戏中心'"></nav-button2>
      <nav-button2 :button-text="'会员购'"></nav-button2>
      <nav-button2 :button-text="'漫画'"></nav-button2>
      <nav-button2 :button-text="'赛事'"></nav-button2>
      <nav-button2 :button-text="'亚运会'"></nav-button2>
      <nav-button2 :button-text="'国创'"></nav-button2>
    </template>

    <v-text-field
      :loading="loading"
      density="compact"
      variant="solo"
      label="Search here"
      append-inner-icon="mdi-magnify"
      single-line
      hide-details
      @click:append-inner="onClick"
      class="ma-4"
    ></v-text-field>

    <template v-slot:append>
      <nav-button3 :button-text="'动态'" :icon-name="'mdi-heart'"></nav-button3>
      <nav-button3 :button-text="'大会员'" :icon-name="'mdi-alpha-d-circle-outline'"></nav-button3>
      <nav-button3 :button-text="'消息'" :icon-name="'mdi-email-outline'"></nav-button3>
      <nav-button3 :button-text="'动态'" :icon-name="'mdi-camera-iris'"></nav-button3>
      <nav-button3 :button-text="'收藏'" :icon-name="'mdi-star-outline'"></nav-button3>
      <nav-button3 :button-text="'历史'" :icon-name="'mdi-alpha-l-circle-outline'"></nav-button3>
      <nav-button3 :button-text="'创作中心'" :icon-name="'mdi-lightbulb-on-outline'"></nav-button3>

      <v-btn @click="navigateToUpload" class="custom-upload-button" :prepend-icon="'mdi-tray-arrow-up'">投稿</v-btn>
    </template>
  </v-app-bar>

</template>


<script lang="ts" setup>

import NavButton2 from "@/components/FirstScreen/NavBar/NavButton2/NavButton2.vue";
import NavButton3 from "@/components/FirstScreen/NavBar/NavButton3/NavButton3.vue";

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const navigateToHome = () => {
  router.push({ name: 'Home' });
}
const navigateToUpload = () => {
  router.push({ name: 'Upload' });
}
const navigateToAnime = () => {
  router.push({ name: 'Anime' });
}

// 使用 ref 创建 loaded 和 loading 变量
const loaded = ref(false);
const loading = ref(false);

// 创建 onClick 方法
const onClick = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
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

