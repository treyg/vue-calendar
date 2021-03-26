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
        <v-icon color="red" small @click="$emit('delete-task', task.id)">
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
.fas {
  color: #e33f34;
  font-size: 1.2em;
}
.task {
  background: var(--darkest-container);
  margin: 0.5em;
  margin-bottom: 2em;
  padding: 1em 2em;
  cursor: pointer;
  border-bottom: var(--border);
  /* border-radius: 0.4em; */
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 3.7em;
  font-weight: 400;
}

.task p {
  color: var(--date-color);
  font-size: 3.1em;
}
</style>
