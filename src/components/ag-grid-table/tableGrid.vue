<template>
  <div class="d-sm-flex justify-end align-end flex-column position-relative">
    <v-hover v-slot="{ isHovering, hovering }" open-delay="100">
        <v-dialog width="auto">
          <template #activator="{ props }">
            <div class="d-sm-flex flex-row">
              <v-btn class="bg-red ma-2 text-center text-subtitle-1" v-bind="hovering" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 8 : 0" width="150px" @click="deleteStorage">Deleta lista</v-btn>
              <v-btn class="bg-green ma-2 text-center text-subtitle-1" v-bind="hovering, props" :class="{ 'on-hover': isHovering }" :elevation="isHovering ? 8 : 0" width="150px">cadastra lista</v-btn>
            </div>
            </template>
          <registerPatient></registerPatient>
        </v-dialog>
    </v-hover>
      <ag-grid-vue
        :rowData="rowData"
        :columnDefs="colDefs"
        :dataTypeDefinitions="dataTypeDefinitions"
        @cellValueChanged="onCellValueChanged"
        style="height: 45vh; min-width:60vw;"
        class="ag-theme-quartz text-center"
      >
      </ag-grid-vue>
    </div>
</template>

<script>
import { onBeforeMount, ref  } from 'vue';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { AgGridVue } from "ag-grid-vue3";
import registerPatient from "@/components/registerPatient.vue" 
import deletePatient from '@/controllers/deletePatient';

var filterParams = {
  comparator: (filterLocalDateAtMidnight, cellValue) => {
    var dateAsString = cellValue;
    if (dateAsString == null) return -1;
    var dateParts = dateAsString.split("/");
    var cellDate = new Date(
      Number(dateParts[2]),
      Number(dateParts[1]) - 1,
      Number(dateParts[0]),
    );
    if (filterLocalDateAtMidnight.getTime() === cellDate.getTime()) {
      return 0;
    }
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    }
    if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    }
    return 0;
  },
  minValidYear: 2000,
  maxValidYear: 2999,
  inRangeFloatingFilterDateFormat: "Do MMM YYYY",
};

export default {
 name: "tableGrid",
 components: {
   AgGridVue,
   deletePatient
 },
 setup() {

  const rowData = ref([]);
 
  const deleteRow = (data) => {
      const allPatients = JSON.parse(localStorage.getItem('patientList')) || [];
      const updatedPatients = allPatients.filter(patient => patient.cpf !== data.cpf);
      localStorage.setItem('patientList', JSON.stringify(updatedPatients));
      rowData.value = updatedPatients;
  };

  const colDefs = ref([
    { 
      headerName: "Nome",
      field: "primeiro_nome",
      editable:true,
      filter: true,
      width: 150,
      minWidth: 100,
      flex: 2,
      autoHeight: true,
      resizable: true
    },
    { 
      headerName: "Sobrenome",
      field: "sobrenome",
      editable:true,
      filter: true,
      width: 250,
      minWidth: 100,
      flex: 2,
      autoHeight: true,
      resizable: true
      
    },
    { 
      headerName: "Email",
      field: "email",
      editable:true,
      filter: true,
      width: 250,
      minWidth: 100,
      flex: 2,
      autoHeight: true,
      resizable: true
    },
    { 
      headerName: "CPF",
      field: "cpf",
      editable:true,
      filter: true,
      width: 250,
      minWidth: 100,
      flex: 2,
      autoHeight: true,
      resizable: true
    },
    { 
      headerName: "Data",
      field: "nascimento",
      filter: 'agDateColumnFilter',
      filterParams: filterParams,
      editable: true,
      width: 125,
      minWidth: 100,
      flex: 2,
      autoHeight: true,
      resizable: true
    },
    { 
      headerName: "Educação",
      field: "educacao",
      filter: true,
      editable:true,
      minWidth: 100,
      width: 150,
      flex: 2,
      autoHeight: true,
      resizable: true
    },
    { 
      headerName: "Genêro",
      field: "sexo",
      editable:true,
      filter: true,
      minWidth: 100,
      width: 150,
      flex: 2,
      autoHeight: true,
      resizable: true
    },
    {
        headerName: "Ação",
        field: "action",
        width: 100,
        cellRenderer: deletePatient, 
        cellRendererParams: {
          clicked: deleteRow 
        },
        resizable: true,
        autoHeight: true
      }
    ]);

  const dataTypeDefinitions = ref(null);
  
  onBeforeMount(() => {
    dataTypeDefinitions.value = {
      dateString: {
        baseDataType: "dateString",
        extendsDataType: "dateString",
        valueParser: (params) =>
          params.newValue != null &&
          params.newValue.match("\\d{2}/\\d{2}/\\d{4}")
            ? params.newValue
            : null,
        valueFormatter: (params) =>
          params.value == null ? "" : params.value,
        dataTypeMatcher: (value) =>
          typeof value === "string" && !!value.match("\\d{2}/\\d{2}/\\d{4}"),
        dateParser: (value) => {
          if (value == null || value === "") {
            return undefined;
          }
          const dateParts = value.split("/");
          return dateParts.length === 3
            ? new Date(
                parseInt(dateParts[2]),
                parseInt(dateParts[1]) - 1,
                parseInt(dateParts[0]),
              )
            : undefined;
        },
        dateFormatter: (value) => {
          if (value == null) {
            return undefined;
          }
          const date = String(value.getDate());
          const month = String(value.getMonth() + 1);
          return `${date.length === 1 ? "0" + date : date}/${month.length === 1 ? "0" + month : month}/${value.getFullYear()}`;
        },
      },
    };
    const patientSaves = JSON.parse(localStorage.getItem('patientList')) || [];
    rowData.value = patientSaves;

    });

    const onCellValueChanged = (event) => {
    const updatedData = event.data;
    const allPatients = JSON.parse(localStorage.getItem('patientList')) || [];
    const index = allPatients.findIndex(patient => patient.cpf === updatedData.cpf);
    if (index !== -1) {
      allPatients[index] = updatedData;
      localStorage.setItem('patientList', JSON.stringify(allPatients));
    }
  };


  const deleteStorage = () => {
      localStorage.removeItem('patientList');
      alert('Dados deletados da lista de pacientes!');
      window.location.reload()
    };

  return {
    rowData,
    colDefs,
    dataTypeDefinitions,
    onCellValueChanged,
    deleteStorage,
    deleteRow
  };
  },
};
</script>