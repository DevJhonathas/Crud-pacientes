<script setup>
  import tableGrid from '../components/ag-grid-table/tableGrid.vue';

</script>

<template>
    <main style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 80vh;">
        <div class="d-sm-flex align-center justify-center flex-column">
          <h1 class="custom-title">PACIENTES</h1>
          <p class="custom-subtitle">Bem vindo a lista de pacientes!</p>
        </div>
        <tableGrid></tableGrid>
    </main>
</template>


<style>
  .custom-title{
    font-size: 6em;
    font-weight: 900;
    text-align: center;

    } 
  
  .custom-subtitle{
    font-size: 2em;
    font-weight: 500;
    text-align: center;
  }

  @media (max-width: 490px){
    .custom-title{
      font-size: 4em;
    }
    .custom-subtitle{
      font-size: 1.5em;
      font-weight: 500;
      text-align: center;
  }
  }
</style>