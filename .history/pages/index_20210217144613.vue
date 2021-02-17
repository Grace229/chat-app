<template>
  <div id="app">
    <v-card
      class="mx-auto mt-15 light-green lighten-4"
      dark
      max-width="600"
      height="300"
    >
      <div>
        <header>
          <div class="headline text-center pt-6 success--text">Join Chat</div>
        </header>
        <div class="pt-5 mx-auto" style="max-width: 400px">
          <form @submit.prevent="saveUsername">
            <div>
              <v-text-field
                dark
                color="success"
                label="UserName"
                filled
                dense
                :rules="[(v) => !!v || 'Úsername cannot be empty']"
              />
            </div>
            <div class="pt-6">
              <v-btn block class="success white--text" type="submit"
                >Join</v-btn
              >
            </div>
          </form>
        </div>
      </div>
    </v-card>
  </div>

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
  background-color: #3cbc8d;
}
.mt-15 {
  background-color: #181515;
}
</style>
