<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text v-for="(err, index) in errors" :key="index">
          <p>{{ err }}</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = !dialogSetting">I accept</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "ErrorModal",
  props: {
    dialogSetting: {
      type: Boolean,
      default: false,
    },

    errorsArray: {
      type: Array,
    },
  },
  data() {
    return {
      dialog: this.dialogSetting,
      errors: this.errorsArray,
    };
  },
};
</script>
