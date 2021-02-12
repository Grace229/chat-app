<template>
  <div id="app">
    <v-card elevation="24" color="#f3ff3f3" width="500px">
      <v-form>
        <div style="color: pink">
          <v-text-field
            v-model="first"
            label="First Name"
            outlined
          ></v-text-field>
          <v-btn depressed color="primary"> Primary </v-btn>
        </div>
      </v-form>
    </v-card>
  </div>
</template>
<style>
#app {
  background-color: white;
  margin: 100px 10px 0px 200px;
}
</style>
