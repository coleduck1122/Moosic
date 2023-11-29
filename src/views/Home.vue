<template>
  <app-bar-background class="mb-3"/>
  <v-container style="padding: 0">
    <nav-bar class="mb-2"/>
  </v-container>
  <MainPage/>
</template>

<script lang="ts" setup>
  import AppBarBackground from "@/components/FirstScreen/AppBarBackground/AppBarBackground.vue";
  import NavBar from "@/components/FirstScreen/NavBar/NavBar.vue";
  import MainPage from "@/components/MainPage/MainPage.vue";
</script>

<style lang="scss">

</style>
