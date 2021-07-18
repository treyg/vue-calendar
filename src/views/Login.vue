<template>
  <div>
    <v-form align="center" @submit.prevent="loginUser">
      <v-container>
        <v-row>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="email"
              label="E-mail"
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Password"
              required
              @click:append="() => (value = !value)"
              :type="value ? 'password' : 'text'"
              :append-icon="value ? 'mdi-eye' : 'mdi-eye-off'"
            ></v-text-field>

            <v-btn block @click="loginUser" color="primary"> Sign In </v-btn>
          </v-col>
        </v-row>
        <ErrorModal
          v-if="error"
          :dialogSetting="error"
          :errorsArray="errorsArray"
          @updateDialogSetting="errorUpdate"
        />
      </v-container>
      <p class="subtitle-1" align="center">
        Don't have an account?
        <router-link style="text-decoration: none; color: inherit" to="/signup"
          >Signup</router-link
        >
      </p>
    </v-form>
  </div>
</template>
<script>
import { supabase } from "../supabaseClient";
import ErrorModal from "../components/ErrorModal.vue";
export default {
  name: "Login",
  components: {
    ErrorModal,
  },
  data() {
    return {
      email: null,
      password: null,
      value: String,
      error: false,
      errorsArray: [],
      dialogFlag: true,
    };
  },
  methods: {
    async loginUser() {
      const { user, session, error } = await supabase.auth.signIn(
        {
          email: this.email,
          password: this.password,
        },
        {
          //redirectTo: this.$router.push("/"),
        }
      );
      if (error) {
        console.log(error);
        this.error = true;
        this.errorsArray.push(error);
      } else {
        this.$router.push("/");
      }

      this.$store.commit("login", user);
      this.$store.commit("attemptLogin");
      this.$store.commit("session", session);
    },

    errorUpdate(val) {
      this.error = val;
    },
  },
};
</script>
<style scoped>
a {
  text-decoration: underline;
  border-bottom: 1px solid black;
}
</style>
