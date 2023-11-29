<script setup lang="ts">
import { defineProps } from 'vue';
import MenuItemBtn from "@/components/FirstScreen/NavBar/MenuBtn/MenuItemBtn/MenuItemBtn.vue";

// 通过 defineProps 获取传入的属性
const props = defineProps({
  buttonText: String, // 按钮显示的文本作为 prop
  menuItemFirst: Array<string>,
  menuItemSecond: Array<string>,
  menuItemThird: Array<string>,
});

</script>

<template>
  <div class="text-center">
    <v-menu
      transition="slide-y-transition"
      open-on-hover
      class="menuBoard"
    >
      <template v-slot:activator="{ props }">
        <v-btn
          dark
          v-bind="props"
          class="menuBtn"
        >
          {{buttonText}}
        </v-btn>
      </template>
      <v-row>
        <v-list v-if="menuItemFirst">
          <v-list-item
            v-for="(name, index) in menuItemFirst"
            :key="index"
          >
            <menu-item-btn :button-text="name"></menu-item-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="menuItemSecond">
          <v-list-item
            v-for="(name, index) in menuItemSecond"
            :key="index"
          >
            <menu-item-btn :button-text="name"></menu-item-btn>
          </v-list-item>
        </v-list>

        <v-list v-if="menuItemThird">
          <v-list-item
            v-for="(name, index) in menuItemThird"
            :key="index"
          >
            <menu-item-btn :button-text="name"></menu-item-btn>
          </v-list-item>
        </v-list>
      </v-row>

    </v-menu>
  </div>
</template>

<style scoped lang="scss">
.menuBoard {
  //border-radius: 20px;
}
.menuBtn {
  height: 30px;
  width:  80px;
  background-color: #F6F7F8;
  border-radius: 10px;
  margin: 7px;
}
.menuText {
  background: #3AA1D7;
}
</style>
