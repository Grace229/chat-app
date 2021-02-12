<template>
  <div id="app">
    <Chat :messages="formattedChats" />
    <spacer />
    <form @submit.prevent="writeToFirestore">
      <input v-model="text.name" type="text" placeholder="name" />
      <input v-model="text.message" type="text" placeholder="message" />
      <button type="submit">Add</button>
    </form>

    <v-app>
      <v-form color="black">
        <v-container>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="first"
                label="First Name"
                outlined
              ></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="last"
                label="Last Name"
                outlined
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-app>
  </div>
</template>

<script>
import Chat from '../components/Chat'
export default {
  components: {
    Chat,
  },
  data() {
    return {
      password: 'Password',
      message: 'Hey!',
      loading: true,
      chats: [],
      formattedChats: [],
      text: {
        name: '',
        message: '',
      },
    }
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
  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },
  methods: {
    async writeToFirestore() {
      const messageRef = this.$fire.firestore.collection('Chat').doc()
      try {
        await messageRef.set({
          time: new Date(),
          name: this.text.name,
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
</style>
