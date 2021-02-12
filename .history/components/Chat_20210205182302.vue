<template>
  <div>
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
    >
      <v-col cols="5">
        <v-container>
          <v-row justify="space-around">
            <v-card width="700" height="80">
              <v-snackbar
                :timeout="-1"
                :vertical="vertical"
                :value="true"
                :multi-line="multiLine"
                color="blue-grey"
                absolute
                left
                shaped
                top
              >
                {{ message.message }}
                <template v-slot:action="{ attrs }">
                  <v-btn
                    color="indigo"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                  >
                    {{ message.time }}
                  </v-btn>
                </template>
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
  data: () => ({
    vertical: true,
    multiLine: true,
  }),
}
</script>
