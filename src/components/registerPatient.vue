<template>
    <form>
        <v-card 
        class="mx-auto"
        width="500"
        title="Cadastro Paciente"
        ><v-container>
        <v-text-field
            v-model="form.primeiro_nome"
            color="primary"
            label="Primeiro Nome"
            placeholder="Coloque seu nome"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="form.sobrenome"
            color="primary"
            label="Sobrenome"
            placeholder="Coloque seu sobrenome"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="form.email"
            color="primary"
            label="Email"
            placeholder="Coloque seu email"
            suffix="@gmail.com"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="form.cpf"
            color="primary"
            label="CPF"
            placeholder="Coloque seu CPF"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="form.nascimento"
            color="primary"
            label="Data de Nascimento"
            variant="underlined"
            type="date"
        ></v-text-field>

        <v-text-field
            v-model="form.educacao"
            color="primary"
            label="Educação"
            placeholder="Coloque seu nível de educação"
            variant="underlined"
        ></v-text-field>

        <v-text-field
            v-model="form.sexo"
            color="primary"
            label="Sexo"
            placeholder="Coloque seu sexo"
            variant="underlined"
        ></v-text-field>

        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" @click.prevent="salvarPaciente">
            Confirmar
            <v-icon icon="mdi-check-circle" end></v-icon>
        </v-btn>
        </v-card-actions>
    </v-card>
    </form>
</template>

<script setup>
    import { ref } from 'vue';

    const form = ref({
        primeiro_nome: '',
        sobrenome: '',
        email: '',
        cpf: '',
        educacao: '',
        sexo:'',
        nascimento:''
    });

    const salvarPaciente = () => {
        const paciente = {
            primeiro_nome: form.value.primeiro_nome,
            sobrenome: form.value.sobrenome,
            email: form.value.email,
            cpf: form.value.cpf,
            nascimento: form.value.nascimento,
            educacao: form.value.educacao,
            sexo: form.value.sexo,
        };

        const pacientesExistentes = JSON.parse(localStorage.getItem('pacientes')) || [];

        pacientesExistentes.push(paciente);

        localStorage.setItem('pacientes', JSON.stringify(pacientesExistentes));
        
        Object.keys(form.value).forEach(key => form.value[key] = '');
};
</script>