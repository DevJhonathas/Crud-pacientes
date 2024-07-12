<template>
  <v-btn @click="onClick" class="btn-danger">
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ['params'],
  methods: {
    onClick() {
      this.params.clicked(this.params.data);
    }
  }
};
</script>

<style scoped>
.btn-danger {
  background-color: red;
  color: white;
  border: none;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
}

.btn-danger:hover {
  background-color: darkred;
}
</style>