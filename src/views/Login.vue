<template>
  <div>
    <v-form @submit.prevent="loginUser">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="mx-auto">
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
              v-on:keyup.enter="loginUser"
            ></v-text-field>

            <v-btn block @click="loginUser" color="primary"> Sign In </v-btn>
            <p class="subtitle-1 mt-4" align="center">
              Don't have an account?
              <router-link style="color: inherit" to="/signup"
                >Signup</router-link
              >
            </p>
          </v-col>
        </v-row>
        <ErrorModal
          v-if="error"
          :dialogSetting="error"
          :errorsArray="errorsArray"
          @updateDialogSetting="errorUpdate"
        />
      </v-container>
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
      const { user, session, error } = await supabase.auth.signIn({
        email: this.email,
        password: this.password,
      });
      if (error) {
        console.log(error);
        this.error = true;
        this.errorsArray.push(error);
      } else {
        this.$store.commit("attemptLogin");
        this.$store.commit("login", user);
        this.$store.commit("session", session);
        this.$router.push("/");
      }
    },

    errorUpdate(val) {
      this.error = val;
    },
  },
};
</script>
<style scoped>
/* a {
  text-decoration: underline !important;
} */
</style>
