<template>
  <div id="chat">
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
    >
      <v-col cols="5">
        <v-list rounded>
          <v-subheader>REPORTS</v-subheader>
          <v-list-item-group color="primary">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-arrow</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="message.message"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-container>
          <v-row justify="space-around">
            <v-col>
              <ul>
                <li>{{ message.name }}</li>
                <li class="chats">{{ message.message }} {{ message.time }}</li>
                <li>{{ message.time }}</li>
              </ul>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
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
<style>
#chat {
  background-color: white;
  width: 100%;
}
.chats {
  background-color: #3cbc8d;
  border-radius: 0px 10px;
  padding: 5px;
  width: max-content;
  font-size: 15px;
}
</style>
