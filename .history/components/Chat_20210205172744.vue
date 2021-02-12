<template>
  <div>
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
    >
      <v-col cols="8">
        <v-container>
          <v-row justify="space-betweeen">
            <v-card width="500">
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
