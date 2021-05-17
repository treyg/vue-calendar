<template>
  <v-app>
    <NavDrawer />
    <v-app-bar app>
      <Header />
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <Tasks
          @toggle-add-task="toggleAddTask"
          title="Reminders"
          :showAddTask="showAddTask"
        />
        <router-view :showAddTask="showAddTask"></router-view>
      </v-container>
    </v-main>
    <v-footer>
      <BottomNav @fab-click="toggleAddTask" />
    </v-footer>
  </v-app>
</template>

<script>
import NavDrawer from "./components/NavDrawer";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import BottomNav from "./components/BottomNav";
export default {
  name: "App",
  components: {
    Tasks,
    Header,
    BottomNav,
    NavDrawer,
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
  created() {
    window.eventBus = this;
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
