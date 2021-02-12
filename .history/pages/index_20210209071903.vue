<template>
  <div id="app">
    <Chat :messages="formattedChats" />
    <!-- <form @submit.prevent="writeToFirestore">
      <input v-model="text.name" type="text" placeholder="name" />
      <input v-model="text.message" type="text" placeholder="message" />
      <button type="submit">Add</button>
    </form> -->
    <!-- input -->
    <v-footer dark padless fixed app>
      <v-card
        width="100%"
        height="80px"
        class="display-4 white gray--text text--darken-2"
      >
        <v-col cols="12">
          <v-form>
            <v-card width="80%" height="70px" color="#f3f3f3">
              <v-container>
                <v-row color="success">
                  <v-col cols="12" color="success">
                    <v-text-field
                      color="success"
                      v-model="message"
                      :append-icon="
                        marker ? 'mdi-map-marker' : 'mdi-map-marker-off'
                      "
                      :append-outer-icon="
                        message ? 'mdi-send' : 'mdi-microphone'
                      "
                      :prepend-icon="icon"
                      filled
                      app
                      clear-icon="mdi-close-circle"
                      clearable
                      label="Message"
                      type="text"
                      @click:append="toggleMarker"
                      @click:append-outer="sendMessage"
                      @click:prepend="changeIcon"
                      @click:clear="clearMessage"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-form>
        </v-col>
      </v-card>
    </v-footer>
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
      show: false,
      message: 'Hey!',
      marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
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
    toggleMarker() {
      this.marker = !this.marker
    },
    sendMessage() {
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++
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
