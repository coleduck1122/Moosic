<template>
  <v-main>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </v-main>
</template>

<script lang="ts" setup>
  //
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
