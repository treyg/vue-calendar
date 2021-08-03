import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
//import { preset } from "vue-cli-plugin-vuetify-preset-rally/preset";
//import { preset } from "vue-cli-plugin-vuetify-preset-owl/preset";

Vue.use(Vuetify);

export default new Vuetify({
  //preset,
  theme: {
    themes: {
      light: {
        primary: "#3ecf8e",
      },
      dark: {
        primary: "#3ecf8e",
      },
    },
  },
});
