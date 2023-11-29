<template>
    <v-btn class="navBtn">
      {{ buttonText }}
    </v-btn>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// 通过 defineProps 获取传入的属性
const props = defineProps({
  buttonText: String, // 按钮显示的文本作为 prop
});

</script>


<style scoped lang="scss">
/* 你可以在这里添加样式 */
.navBtn {
  height: 30px;
  width:  80px;
  background-color: #F6F7F8;
  border-radius: 10px;
  margin: 7px;
}

</style>
