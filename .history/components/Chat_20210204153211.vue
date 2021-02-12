<template>
  <div>
    <v-row
      v-for="(message, index) in messages"
      :key="index"
      :class="index % 2 === 0 ? 'justify-end' : 'justify-start'"
    >
      <v-col cols="8">
        <v-container>
          <v-row justify="space-around">
            <v-card width="500">
              <v-card-text>
                <v-timeline align-top dense>
                  <v-timeline-item small>
                    <div>
                      <div class="font-weight-normal">
                        <strong>{{ message.name }}</strong> @{{ message.time }}
                      </div>
                      <div>{{ message.message }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </div>
  <!-- <v-card class="mx-auto" max-width="800">
    <v-list shaped disabled>
      <v-list-item-group>
        <template v-for="message in messages">
          <v-list-item :key="message.message" background-color="light-blue">
            <template>
              <v-list-item-content>
                <v-list-item-title :input-value="active"></v-list-item-title>
              </v-list-item-content>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card> -->
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
  mounted() {
    console.log('hello', this.messages)
  },
}
</script>
