<template>
  <header>
    <!-- <h1>{{ title }}</h1> -->
    <!-- <router-link to="/"><h4>Reminders</h4></router-link>
    <router-link to="/about"><h4>Calendar</h4></router-link> -->
    <h1>{{ $route.name }}</h1>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
h1 {
  font-size: 3em;
  font-weight: normal;
}
</style>
