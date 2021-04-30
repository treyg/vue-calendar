<template>
  <div>
    <!-- FAB for adding tasks -->
    <v-btn
      @click="
        fabClickEmit();
        fab = !fab;
      "
      fixed
      class="addTaskBtn"
      color="primary"
      elevation="5"
      fab
      medium
      style="z-index: 5"
    >
      <v-icon>{{ fab ? "mdi-plus" : "mdi-close" }}</v-icon>
    </v-btn>

    <v-bottom-navigation class="btm-nav" fixed grow>
      <v-app-bar-nav-icon @click="triggerDrawer()" large></v-app-bar-nav-icon>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      activeBtn: 0,
      fab: true,
    };
  },
  methods: {
    fabClickEmit() {
      this.$emit("fab-click");
    },
    triggerDrawer() {
      window.eventBus.$emit("TRIGGER_DRAWER");
    },
  },
};
</script>

<style scoped>
.addTaskBtn {
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 0%;
}

.btm-nav {
  display: flex;
  justify-content: space-between !important;
}
</style>
