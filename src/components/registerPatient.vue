<template>
    <p @click="dialog = true">clique aqui</p>
    <form class="position-absolute d-sm-flex justify-center align-center">
        <v-card 
        class="mx-auto d-none"
        width="500"
        title="Cadastro Paciente"
    >
        <v-container>
        <v-text-field
            v-model="primeiro"
            color="primary"
            label="Primeiro Nome"
            placeholder="Coloque seu nome"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="sobrenome"
            color="primary"
            label="Sobrenome"
            placeholder="Coloque seu sobrenome"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="email"
            color="primary"
            label="Email"
            placeholder="Coloque seu email"
            suffix="@gmail.com"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="cpf"
            color="primary"
            label="CPF"
            placeholder="Coloque seu CPF"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="nascimento"
            color="primary"
            label="Data de Nascimento"
            variant="underlined"
            type="date"
        ></v-text-field>

        <v-text-field
            v-model="educacao"
            color="primary"
            label="Educação"
            placeholder="Coloque seu nível de educação"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="sexo"
            color="primary"
            label="Sexo"
            placeholder="Coloque seu sexo"
            variant="underlined"
        ></v-text-field>

        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success">
            Confirmar

            <v-icon icon="mdi-check-circle" end></v-icon>
        </v-btn>
        </v-card-actions>
    </v-card>
    </form>
</template>

<script setup>
    // new Vue({
    // el: '#app',
    // data() {
    //     return {
    //     dialog: false
    //     }
    // }
    // })
</script>