<template>
  <div id="app">
    <Chat :messages="formattedChats" />
    <spacer />
    <!-- <form @submit.prevent="writeToFirestore">
      <input v-model="text.name" type="text" placeholder="name" />
      <input v-model="text.message" type="text" placeholder="message" />
      <button type="submit">Add</button>
    </form> -->

    <v-app>
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="message"
                outlined
                clearable
                label="Message"
                type="text"
              >
                <template v-slot:prepend>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                      <v-icon v-on="on"> mdi-help-circle-outline </v-icon>
                    </template>
                    I'm a tooltip
                  </v-tooltip>
                </template>
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <v-progress-circular
                      v-if="loading"
                      size="24"
                      color="info"
                      indeterminate
                    ></v-progress-circular>
                    <img
                      v-else
                      width="24"
                      height="24"
                      src="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
                      alt=""
                    />
                  </v-fade-transition>
                </template>
                <template v-slot:append-outer>
                  <v-menu style="top: -12px" offset-y>
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" v-on="on">
                        <v-icon left> mdi-menu </v-icon>
                        Menu
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-text class="pa-6">
                        <v-btn large flat color="primary" @click="clickMe">
                          <v-icon left> mdi-target </v-icon>Click me
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-menu>
                </template>
              </v-text-field>
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
  background-color: white;
}
</style>
