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
