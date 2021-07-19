<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
    <!-- <router-link to="/"><h4>Reminders</h4></router-link>
    <router-link to="/about"><h4>Calendar</h4></router-link> -->
    <h1>{{ $route.name }}</h1>
    <h2>Welcome {{ checkMail }}</h2>
  </header>
</template>

<script>
export default {
  name: "Header",
  // data() {
  //   return {
  //     loggedIn: null,
  //     userEmail: null,
  //   };
  // },
  computed: {
    // checkLog() {
    //   return this.loggedIn == this.$store.state.userInformation.aud;
    // },
    checkMail() {
      return this.$store.state.userInformation.email;
    },
  },
};
</script>
<style scoped>
/* h1 {
  font-size: 3em;
  font-weight: normal;
} */
</style>
