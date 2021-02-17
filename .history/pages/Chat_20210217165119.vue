<template>
  <div id="app">
    <Chat :messages="formattedChats" />
    <v-footer dark padless fixed app>
      <v-card
        width="100%"
        height="120px"
        class="display-4 white gray--text text--darken-2"
      >
        <v-form @submit.prevent="writeToFirestore">
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
          ></v-text-field>
        </v-form>
      </v-card>
      <!-- <v-icon large color="blue darken-2"> mdi-send </v-icon> -->
    </v-footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Chat from '../components/Chat'
export default {
  components: {
    Chat,
  },
  computed: {
    ...mapGetters({
      user: ' GET_USER',
    }),
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
          name: this.$store.getters['chat/GET_USER'],
          message: this.text.message,
        })

        this.$fetch()
        console.log('this.$store.state.username', this.$store.state.username)
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
