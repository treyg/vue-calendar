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
      </v-container>
    </v-main>
    <BottomNav @fab-click="toggleAddTask" />
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    BottomNav,
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
</style>
