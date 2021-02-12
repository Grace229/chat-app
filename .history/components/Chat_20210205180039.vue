<template>
  <div>
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
      no-gutters
    >
      <v-col cols="5">
        <v-container>
          <v-row justify="space-around" no-gutters>
            <v-card class="pa-2" outlined tile>
              <v-snackbar :timeout="-1" :value="true" absolute left shaped top>
                {{ message.message }}
              </v-snackbar>
            </v-card>
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
  data: () => ({}),
}
</script>
