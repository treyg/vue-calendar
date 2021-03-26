<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
    <router-link to="/">Reminders</router-link>
    <router-link to="/calendar">Calendar</router-link>
    <Button
      v-show="homePage"
      @btn-click="$emit('toggle-add-task')"
      :text="showAddTask ? 'x' : '+'"
      :color="showAddTask ? '#e33f34' : 'var(--button-color)'"
      class="addTaskBtn"
    />
  </header>
</template>

<script>
import Button from "./Button";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  computed: {
    homePage() {
      if (this.$route.path === "/") {
        return true;
      } else return false;
    },
  },
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
</style>
