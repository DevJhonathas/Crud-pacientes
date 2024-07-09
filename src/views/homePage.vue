<script setup>
  import tableGrid from '../components/ag-grid-table/tableGrid.vue';
  import createButton from '../components/createButton.vue'

</script>

<template>
    <main style="display: flex; flex-direction: column; justify-content: center; align-items: center">
        <div class="d-sm-flex align-center flex-column">
          <h1 class="text-h1 font-weight-black">CRUD</h1>
          <p class="text-h5 font-weight-medium">Bem vindo ao CRUD!</p>
        </div>
        <createButton></createButton>
        <tableGrid></tableGrid>
    </main>
</template>