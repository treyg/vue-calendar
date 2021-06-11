<template>
  <div>
    <v-form align="center" @submit.prevent="signupUser">
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

            <v-btn block @click="signupUser" color="primary"> Sign Up </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <p class="subtitle-1" align="center">
        Already have an account?
        <router-link style="text-decoration: none; color: inherit" to="/login"
          >Login</router-link
        >
      </p>
    </v-form>
  </div>
</template>
<script>
import { supabase } from "../supabaseClient";

export default {
  name: "Signup",
  data() {
    return {
      email: null,
      password: null,
      value: String,
    };
  },
  methods: {
    signupUser() {
      supabase.auth
        .signUp({
          email: this.email,
          password: this.password,
        })
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          if (error) {
            console.log(error);
          }
        });
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
