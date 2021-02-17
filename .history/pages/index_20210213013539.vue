<template>
  <div id="app">
    <Chat :messages="formattedChats" />
    <v-footer dark padless fixed app>
      <v-row>
        <v-col cols="12">
          <v-form @submit.prevent="writeToFirestore">
            <v-text-field
              class="green green--text text--darken-2"
              label="Filled"
              placeholder="Dense & Rounded"
              filled
              rounded
              dense
            ></v-text-field>
          </v-form>
        </v-col>
      </v-row>
      <!-- <v-form @submit.prevent="writeToFirestore">
        <v-text-field
          v-model="text.message"
          class="green green--text text--darken-2"
          rounded
          color="succes"
          :append-outer-icon="text.message ? 'mdi-send' : 'mdi-send'"
          :prepend-icon="icon"
          filled
          app
          clear-icon="mdi-close-circle"
          clearable
          @click:append-outer="writeToFirestore"
        ></v-text-field> -->
      <!-- <v-icon large color="blue darken-2"> mdi-send </v-icon> -->

      <!-- </v-card> -->
    </v-footer>
  </div>
</template>

<script>
import Chat from '../components/Chat'
export default {
  components: {
    Chat,
  },
  async fetch() {
    await this.$fire.firestore
      .collection('Chat')
      .orderBy('time', 'desc')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.chats.push(doc.data())
        })
      })
    this.formattedChats = this.chats.reverse()
    console.log(this.chats)
  },
  data() {
    return {
      chats: [],
      formattedChats: [],
      text: {
        name: '',
        message: '',
      },
    }
  },

  methods: {
    async writeToFirestore() {
      const messageRef = this.$fire.firestore.collection('Chat').doc()
      try {
        await messageRef.set({
          time: new Date(),
          name: this.$store.state.username,
          message: this.text.message,
        })
        this.$fetch()
        console.log(this.text)
      } catch (e) {
        console.log(e)
      }
    },
  },
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
  background-color: #ffffff;
}
#text {
  background-color: white;
  color: #000;
}
</style>
