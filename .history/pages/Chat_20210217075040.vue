<template>
  <main
    style="min-height: 100vh"
    class="fill-height primary white--text d-flex flex-column justify-center pa-4"
  >
    <v-container>
      <v-card class="mx-auto" max-width="600" height="300">
        <header>
          <div class="headline text-center pt-6 primary--text">Login</div>
        </header>
        <div class="pt-5 mx-auto" style="max-width: 400px">
          <form @submit.prevent="login()">
            <div>
              <v-text-field v-model="username" label="E-mail Address" />
            </div>
            <div class="pt-6">
              <v-btn block class="primary white--text" type="submit"
                >Login</v-btn
              >
            </div>
          </form>
        </div>
      </v-card>
    </v-container>
  </main>

  <!-- <div id="app">
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
  </div> -->
</template>

<script>
export default {
  layout: 'Auth',
  data() {
    return {
      username: '',
    }
  },
  methods: {
    saveUsername() {
      this.$store.dispatch('chat/DISPATCH_USERNAME', this.username)
      this.$router.push('/')
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
