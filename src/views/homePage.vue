<script setup>
  import tableGrid from '../components/ag-grid-table/tableGrid.vue';

</script>

<template>
    <main style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 80vh;">
        <div class="d-sm-flex align-center flex-column">
          <h1 class="text-h1 font-weight-black">PACIENTES</h1>
          <p class="text-h5 font-weight-medium">Bem vindo a lista de pacientes!</p>
        </div>
        <tableGrid></tableGrid>
    </main>
</template>