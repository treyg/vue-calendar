<template>
  <header v-if="loggedIn">
    <h3>
      {{ $route.name }}
    </h3>
    <!-- <h4>{{ checkMail }}</h4> -->
  </header>
</template>

<script>
export default {
  name: "Header",
  // data() {
  //   return {
  //     userEmail: null,
  //   };
  // },
  computed: {
    loggedIn() {
      return this.$store.state.userInformation;
    },
    // checkMail() {
    //   return this.$store.state.userInformation.email;
    // },
  },
};
</script>
<style scoped>
/* h1 {
  font-size: 3em;
  font-weight: normal;
}

h2 {
  font-size: 2em;
} */
</style>
