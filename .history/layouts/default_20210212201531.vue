<template>
  <v-app>
    <v-app-bar :clipped-left="clipped" fixed app color="#3CBC8D">
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      title: 'CHAT APP',
    }
  },
}
</script>
<style>
* {
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
</style>
