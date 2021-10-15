<template>
  <v-form ref="form" @submit="onSubmit" lazy-validation>
    <v-text-field
      v-model="text"
      label="Task"
      required
      name="text"
    ></v-text-field>

    <v-text-field
      v-model="day"
      label="Day & Time"
      placeholder="Today at 5pm"
      name="day"
      required
    ></v-text-field>

    <v-card
      elevation="0"
      id="checkbox-submit-container"
      class="d-flex align-center justify-space-around"
    >
      <v-checkbox v-model="reminder" label="Set a reminder"></v-checkbox>

      <v-btn type="submit" color="primary"> Save Task </v-btn>
    </v-card>
  </v-form>
</template>
<script>
export default {
  name: "AddTask",
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      if (!this.text) {
        alert("Please add a task");
        return;
      } else if (!this.day) {
        alert("Please add a time");
      }
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };
      this.$emit("add-task", newTask);
      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<style scoped></style>
