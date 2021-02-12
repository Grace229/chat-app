<template>
  <div id="app">
    <v-card elevation="24" color="#00bfff" width="500px">
      <v-form>
        <v-container>
          <v-row>
            <v-col md="8">
              <v-text-field
                v-model="first"
                label="First Name"
                outlined
                shaped
                style="align-items: center"
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
  margin: 100px 10px 0px 200px;
}
</style>
