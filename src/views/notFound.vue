<template>
  <v-container fluid class="text-center">
    <v-row align="center" justify="center" class="ma-5">
      <v-col cols="12">
        <h1 class="display-3">Oops!</h1>
        <h2 class="headline">Página não encontrada</h2>
        <p class="subtitle-1">A página que você está procurando pode ter sido removida, renomeada ou está temporariamente indisponível.</p>
        <v-btn color="primary" to="/" class="text-decoration-none">Home</v-btn>
      </v-col>
    </v-row>
    <v-row align="center" justify="center" class="ma-5">
      <v-col cols="12">
        <img src="../assets/bunny_with_coffe.gif" alt="Gif fofo animado" id="bunny_with_coffe">
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'NotFound'
}
</script>

<style>
  #bunny_with_coffe{
    width: 10vw;
  }

  
  @media (max-width: 1920px){
    #bunny_with_coffe{
          width: 15vw;
      }
  }

  @media (max-width: 900px){
    #bunny_with_coffe{
          width: 35vw;
      }
  }

  @media (max-width: 490px){
    #bunny_with_coffe{
          width: 40vw;
      }
  }
</style>