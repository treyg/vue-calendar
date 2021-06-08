<template>
  <v-navigation-drawer v-model="drawer" absolute left temporary>
    <v-list nav dense>
      <v-list-item-group active-class="blue--text text--accent-4">
        <router-link style="text-decoration: none" to="/">
          <v-list-item>
            <v-list-item-title>Reminders</v-list-item-title>
          </v-list-item>
        </router-link>

        <router-link style="text-decoration: none" to="/calendar">
          <v-list-item>
            <v-list-item-title>Calendar</v-list-item-title>
          </v-list-item>
        </router-link>

        <v-list-item>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>

        <v-list-item>
          <v-list-item-title>Support</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavDrawer",
  // props: {
  //   drawer: null,
  // },

  data() {
    return {
      drawer: null,
    };
  },
  methods: {},
  mounted() {
    window.eventBus.$on("TRIGGER_DRAWER", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
<style scoped></style>
