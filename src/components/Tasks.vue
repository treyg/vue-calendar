<template>
  <div>
    <div v-for="task in tasks" :key="task.id">
      <Task
        @toggle-reminder="$emit('toggle-reminder', task.id)"
        @delete-task="$emit('delete-task', task.id)"
        :task="task"
      />
      <v-divider></v-divider>
    </div>
  </div>
</template>
<script>
import Task from "./Task";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>
