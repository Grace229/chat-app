<template>
  <main
    style="min-height: 100vh"
    class="fill-height white--text d-flex flex-column justify-center"
  >
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
    >
      <v-col cols="5">
        <v-container>
          <v-avatar color="primary" size="6"></v-avatar>
          <v-list disabled color="white">
            <v-list-item-group class="green white--text" width="100%">
              <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-arrow</v-icon>
                </v-list-item-icon>
                <v-list-item-content v-text="message.message">
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-container>
        <!-- <v-container>
          <v-row justify="space-around">
            <v-col>
              <ul>
                <li>{{ message.name }}</li>
                <li class="chats">{{ message.message }} {{ message.time }}</li>
                <li>{{ message.time }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-container> -->
      </v-col>
    </v-row>
  </main>
</template>
<script>
export default {
  props: {
    messages: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scooped>
body {
  background-color: #fff;
}

.green {
  border-radius: 0px 10px;
  width: max-content;
}
</style>
