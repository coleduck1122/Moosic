<script setup lang="ts">
import AppBar from "@/layouts/UploadView/AppBar.vue";
import NavDrawers from "@/components/NavDrawers/NavDrawers.vue";
import UploadTab from "@/components/UploadTab/UploadTab.vue";
</script>

<template>
  <v-app>
    <app-bar/>
    <v-main>
      <v-row no-gutters>
        <v-responsive width="12%">
          <nav-drawers />
        </v-responsive>
        <v-responsive width="88%">
          <upload-tab />
        </v-responsive>
      </v-row>
    </v-main>
  </v-app>

</template>

<style scoped lang="scss">

</style>
