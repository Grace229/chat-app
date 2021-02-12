<template>
  <div id="app">
    <v-card elevation="14" color="#3CBC8D" width="500px">
      <v-form @submit.prevent="saveUsername">
        <v-container>
          <v-row>
            <v-col class="mx-auto" md="8">
              <v-text-field
                v-model="username"
                label="Username"
                color="success"
                outlined
                :rules="[(v) => !!v || 'Úsername cannot be empty']"
              ></v-text-field>
              <v-btn type="submit" depressed color="success"> Join </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    saveUsername() {
      this.$store.dispatch('DISPATCH_USERNAME', this.username)
    },
  },
}
</script>

<style>
#app {
  background-color: white;
  margin: 100px 10px 0px 200px;
}
</style>
