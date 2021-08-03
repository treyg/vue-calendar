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
    <v-btn @click="toggleTheme" text rounded>Toggle Theme</v-btn>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click="logUserOut"> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { supabase } from "../supabaseClient";
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
  methods: {
    async logUserOut() {
      const { user, error } = await supabase.auth.signOut({
        redirectTo: this.$router.push("/login"),
      });
      if (error) {
        console.log(error);
      }
      this.$store.commit("logOut", user);
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },

  mounted() {
    window.eventBus.$on("TRIGGER_DRAWER", () => {
      this.drawer = !this.drawer;
    });
  },
};
</script>
<style scoped></style>
