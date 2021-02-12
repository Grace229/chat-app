<template>
  <div id="app">
    <v-card elevation="14" color="#3CBC8D" width="500px">
      <v-form>
        <v-container>
          <v-row>
            <v-col class="mx-auto" md="8">
              <v-text-field
                v-model="first"
                label="First Name"
                color="success"
                outlined
              ></v-text-field>
              <v-btn depressed color="success"> Join </v-btn>
            </v-col>
          </v-row>
        </v-container>
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
