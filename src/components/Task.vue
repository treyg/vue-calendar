<template>
  <!-- <div
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <i @click="$emit('delete-task', task.id)" class="fas fa-times"></i>
    </h3>
    <p>{{ task.day }}</p>
  </div> -->

  <v-list-item
    @dblclick="$emit('toggle-reminder', task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
    two-line
  >
    <v-list-item-content>
      <v-list-item-title
        >{{ task.text }}
        <v-icon color="red" medium @click="$emit('delete-task', task.id)">
          mdi-close
        </v-icon></v-list-item-title
      >
      <v-list-item-subtitle>{{ task.day }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>
<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
};
</script>
<style scope>
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  display: flex;
  justify-content: space-between;
}
</style>
