<template>
  <v-app>
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
