<template>
  <div id="chat">
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
    >
      <v-col cols="5">
        <v-container>
          <v-row justify="space-around">
            <v-col>
              <ul>
                <li class="chats">{{ message.message }}</li>
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
  data: () => ({
    vertical: true,
    multiLine: true,
  }),
}
</script>
<style>
#chat {
  background-color: white;
}
.chats {
  background-color: violet;
  border-radius: 0px 10px 0px 10px;
  padding: 10px;
  width: max-content;
  font-size: 25px;
}
</style>
