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

        <v-select
            v-model="form.educacao"
            color="primary"
            :items="[
                'Ens. Fundamental Incompleto',
                'Ens. Fundamental completo',
                'Ens. Médio incopleto',
                'Ens. Médio Completo',
                'Curso Técnico',
                'Tecnólogo',
                'Bacharelado',
                'Mestrado',
                'Doutorado',
                'Outro'
            ]"
            label="Educação"
            variant="underlined"
        ></v-select>

        <v-select
            v-model="form.sexo"
            :items="['Masculino', 'Feminino', 'Outro']"
            color="primary"
            label="Sexo"
            variant="underlined"
        ></v-select>

        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn color="success" @click="savePatient">
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
        nascimento: null
    });

 
    const formatData = (data) => {
    const dt = new Date(data);
    const day = dt.getDate().toString().padStart(2, '0');
    const month = (dt.getMonth() + 1).toString().padStart(2, '0');
    const year = dt.getFullYear();
    return `${day}/${month}/${year}`;
};

    const savePatient = () => {
        if (form.value.nascimento) {
            const birth_date = new Date(form.value.nascimento);
        if (isNaN(birth_date.getTime())) {
            console.error("Data inválida")
        return;
        }

        const formatCPF = (cpf) => {
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        };

        const formatted_CPF = formatCPF(form.value.cpf);
        const formatted_birth = formatData(birth_date);
        const emailWithSuffix = form.value.email.includes('@') ? form.value.email : form.value.email + '@gmail.com';

        const patientList = {
            primeiro_nome: form.value.primeiro_nome,
            sobrenome: form.value.sobrenome,
            email: emailWithSuffix,
            cpf: formatted_CPF,
            nascimento: formatted_birth,
            educacao: form.value.educacao,
            sexo: form.value.sexo,
        };

    const pacientesExistentes = JSON.parse(localStorage.getItem('patientList')) || [];

    pacientesExistentes.push(patientList);

    localStorage.setItem('patientList', JSON.stringify(pacientesExistentes));
    
    Object.keys(form.value).forEach(key => form.value[key] = '');
    }
}
</script>