<script setup>
  import '@mdi/font/css/materialdesignicons.css'

</script>

<template>
    <div class="d-sm-flex align-center pa-md-16 mx-lg-auto flex-column">
        <v-alert
        color="error"
        title="Página Não Encontrada!"
        text='Oops, nós não conseguimos encontrar essa página.'
        class="w-50 justify-center rounded-xl"
        >
      </v-alert>

      <div class="justify-center">
          <p class="font-weight-medium text-center text-subtitle-1">Deseja voltar para tela inicial? 
          <v-hover v-slot="{ isHovering, props }" open-delay="100">
            <v-card v-bind="props" :class="{ 'on-hover': isHovering }" class=" font-weight-medium text-center text-subtitle-1 bg-grey-lighten-3"
              :elevation="isHovering ? 8 : 0">
                <router-link to="/" class="text-decoration-none">Home</router-link>
            </v-card>
          </v-hover>
      </p>
        </div>
    </div>
</template>
