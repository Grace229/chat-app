<template>
  <!-- <div>
    <ul>
      <li v-for="message in messages" :key="message.name">
        {{ message.name }} - {{ message.message }}
      </li>
    </ul>
  </div> -->
  <!-- <ChatItem
      v-for="(message, index) in chats"
      :key="index"
      :message="message"
    /> -->
  <v-card class="mx-auto" max-width="300" tile>
    <v-list disabled>
      <v-subheader>REPORTS</v-subheader>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list-item v-for="message in messages" :key="message.name">
          <v-list-item-icon>
            <v-icon>info</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>
              {{ message.name }} - {{ message.message }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>
<script>
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  data: () => ({}),
  mounted() {
    console.log('hello', this.messages)
  },

  methods: {},
}
</script>
