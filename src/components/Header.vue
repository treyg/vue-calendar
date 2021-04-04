<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
    <router-link to="/"><h4>Reminders</h4></router-link>
    <router-link to="/about"><h4>Calendar</h4></router-link>
    <!-- <Button
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'x' : '+'"
      :color="showAddTask ? '#e33f34' : 'blue'"
      class="addTaskBtn"
    /> -->
  </header>
</template>

<script>
//import Button from "./Button";

export default {
  name: "Header",
  // props: {
  //   title: String,
  //   showAddTask: Boolean,
  // },
  // components: {
  //   Button,
  // },
  // computed: {
  //   homePage() {
  //     if (this.$route.path === "/") {
  //       return true;
  //     } else return false;
  //   },
  // },
};
</script>
<style scoped>
header {
  display: flex;
  align-items: center;
}

a {
  /* color: #c9d1d2; */
  font-size: 4.1em;
  text-decoration: none;
  color: black;
}

a:first-of-type {
  margin-right: 1em;
  margin-left: 0.2em;
}

button {
  margin-left: auto;
}

.addTaskBtn {
  font-size: 5em;
  padding: 0.8em;
  border-radius: 50%;
  line-height: 0.5;
  font-weight: 900;
}

.router-link-exact-active {
  border-bottom: 2px solid white;
}

/* h4 {
  color: white;
} */
</style>
