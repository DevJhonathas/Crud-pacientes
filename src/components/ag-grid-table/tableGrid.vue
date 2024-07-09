
<script>
import { ref } from 'vue';
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { AgGridVue } from "ag-grid-vue3"; // Vue Data Grid Component

export default {
 name: "App",
 components: {
   AgGridVue, // Add Vue Data Grid component
 },
 setup() {
  // Row Data: The data to be displayed.
  const rowData = ref([
    { nome: "Tesla", sobrenome: "sobrenome Y", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Ford", sobrenome: "F-Series", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Toyota", sobrenome: "Corolla", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Tesla", sobrenome: "sobrenome Y", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Ford", sobrenome: "F-Series", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Toyota", sobrenome: "Corolla", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Tesla", sobrenome: "sobrenome Y", email: "ge.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Ford", sobrenome: "F-Series", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
    { nome: "Toyota", sobrenome: "Corolla", email: "testando.teste@gmail.com", cpf: "123.123.123-02", data: "10/03/2001", educacao: "graduado", genero: "Male" },
  ]);

  // Column Definitions: Defines the columns to be displayed.
  const colDefs = ref([
    { 
      headerName: "Nome",
      field: "nome",
      editable:true,
      filter: true,
      width: 150,
      flex: 2,
      autoHeight: true,
      resizable: false
    },
    { 
      headerName: "Sobrenome",
      field: "sobrenome",
      editable:true,
      filter: true,
      width: 250,
      flex: 2,
      autoHeight: true,
      resizable: false
      
    },
    { 
      headerName: "Email",
      field: "email",
      editable:true,
      filter: true,
      width: 250,
      flex: 2,
      autoHeight: true,
      resizable: false
    },
    { 
      headerName: "CPF",
      field: "cpf",
      editable:true,
      filter: true,
      width: 250,
      flex: 2,
      autoHeight: true,
      resizable: false
    },
    { 
      headerName: "Data",
      field: "data",
      editable:true,
      filter: true,
      width: 125,
      flex: 2,
      autoHeight: true,
      resizable: false
    },
    { 
      headerName: "Educação",
      field: "educacao",
      filter: true,
      width: 150,
      flex: 2,
      autoHeight: true,
      resizable: false
    },
    { 
      headerName: "Genêro",
      field: "genero",
      editable:true,
      filter: true,
      width: 150,
      flex: 2,
      autoHeight: true,
      resizable: false
    }
     
  ]);

  return {
    rowData,
    colDefs,
  };
  },
};
</script>
<template>
  <div class="d-sm-flex justify-end align-end flex-column">
    <v-hover v-slot="{ isHovering, props }" open-delay="100">
        <v-card v-bind="props" :class="{ 'on-hover': isHovering }" class="bg-green ma-2  text-center text-subtitle-1" :elevation="isHovering ? 8 : 0" width="150px">
        <button>
            cadastrar 
        </button>
        </v-card>
    </v-hover>
      <ag-grid-vue
        :rowData="rowData"
        :columnDefs="colDefs"
        style="height: 45vh; width:60vw;"
        class="ag-theme-quartz text-center"
      >
      </ag-grid-vue>
  </div>
</template>