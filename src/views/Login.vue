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

            <v-btn block @click="loginUser" color="primary"> Sign Up </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <p class="subtitle-1">
        Don't have an account?
        <router-link style="text-decoration: none; color: inherit" to="/signup"
          >Signup</router-link
        >
      </p>
    </v-form>
  </div>
</template>
<script>
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://terbqcgxfxoyxgztbilu.supabase.co";
const supabaseKey = process.env.VUE_APP_SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      value: String,
    };
  },
  methods: {
    loginUser() {
      supabase.auth
        .signIn({
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
