<template>
  <div id="app">
    <v-card elevation="24" color="#00bfff" width="500px">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="first"
                label="First Name"
                outlined
                shaped
              ></v-text-field>
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
  margin: 100px 10px 0px 250px;
}
</style>
