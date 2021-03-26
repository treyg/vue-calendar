<template>
  <v-app>
    <v-navigation-drawer app>
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <Header
        @toggle-add-task="toggleAddTask"
        title="Reminders"
        :showAddTask="showAddTask"
      />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view :showAddTask="showAddTask"></router-view>
        <Footer />
        <!-- If using vue-router -->
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask;
    },
  },
};
</script>

<style>
/* :root {
  --border: 0.1em solid #c9d1d2;
  --dark-container: #0d1117;
  --darkest-container: #090c10;
  --date-color: #a9d1e7;
  --button-color: #1f6feb;
} */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@media (max-width: 768px) {
  body {
    font-size: 1.302vw;
  }
}

.container {
  width: 100%;
  max-width: 90em;
  margin: auto;
  min-height: 80em;
  /* border: var(--border); */
  padding: 3em;
  border-radius: 0.5em;
  /* background: var(--darkest-container); */
  color: #c9d1d2;
  height: 100%;
  margin: 0%;
}

.router-link-exact-active {
  font-weight: 700;
}

.btn {
  display: inline-block;
  background: var(--button-color);
  color: #fff;
  border: none;
  padding: 0.8em 1.8em;
  margin: 0.5em;
  border-radius: 0.5em;
  cursor: pointer;
  text-decoration: none;
  font-size: 2.8em;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
</style>
