<template>
  <v-form v-model="valid" @submit.prevent="registerUser">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field v-model="email" label="E-mail" required></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>

          <button>Submit</button>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
// import "@/firebase/firebase";
// import "firebase/auth";
import firebase from "firebase/app";
export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    registerUser() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
