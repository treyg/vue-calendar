<template>
  <!-- <form @submit="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task</label>
      <input type="text" v-model="text" name="text" placeholder="Add Task" />
    </div>
    <div class="form-control">
      <label>Day & Time</label>
      <input
        type="text"
        v-model="day"
        name="day"
        placeholder="Add Day & Time"
      />
    </div>
    <div class="form-control form-control-check">
      <label>Set Reminder</label>
      <input type="checkbox" v-model="reminder" name="reminder" />
    </div>

    <input type="submit" value="Save Task" class="btn btn-block" />
  </form> -->

  <v-form ref="form" v-model="valid" @submit="onSubmit" lazy-validation>
    <v-text-field
      v-model="text"
      label="Task"
      required
      name="text"
    ></v-text-field>

    <v-text-field
      v-model="day"
      label="Day & Time"
      name="day"
      required
    ></v-text-field>

    <v-card
      elevation="0"
      id="checkbox-submit-container"
      class="d-flex align-center justify-space-around"
    >
      <v-checkbox v-model="reminder" label="Set a reminder"></v-checkbox>

      <v-btn type="submit" color="primary" @click="resetValidation">
        Save Task
      </v-btn>
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
