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
            <v-col width="400" height="80" style="background-color: white">
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
                    {{ message.name }}
                  </v-btn>
                </template>
              </v-snackbar>
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
</style>
