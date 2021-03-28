<template>
  <div>
    <!-- FAB for adding tasks -->
    <v-btn absolute class="addTaskBtn" color="primary" elevation="5" fab large>
      <v-icon large>mdi-plus</v-icon></v-btn
    >

    <v-bottom-navigation class="btm-nav" :value="activeBtn" light grow>
      <v-app-bar-nav-icon large></v-app-bar-nav-icon>

      <!-- <v-btn>
        <v-icon large>mdi-magnify</v-icon>
      </v-btn> -->
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  data() {
    return {
      activeBtn: 0,
    };
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
