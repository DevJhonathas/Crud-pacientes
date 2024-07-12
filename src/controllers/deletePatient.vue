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
