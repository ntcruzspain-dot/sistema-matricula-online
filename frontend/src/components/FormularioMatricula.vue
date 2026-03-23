<template>
  <div class="container">
    <h2>Matrícula em Cursos Online</h2>

    <input v-model="nome" type="text" placeholder="Nome completo" />

    <input v-model="email" type="email" placeholder="E-mail" />

    <select v-model="cursoSelecionado">
      <option disabled value="">Selecione um curso</option>

      <option v-for="curso in cursos" :key="curso.id" :value="curso.id">
        {{ curso.nome }}
      </option>
    </select>

    <button @click="realizarMatricula">Realizar Matrícula</button>

    <p v-if="mensagem" class="mensagem">
      {{ mensagem }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      nome: "",
      email: "",
      cursoSelecionado: "",
      cursos: [],
      mensagem: "",
    };
  },

  mounted() {
    axios
      .get("http://localhost:3000/cursos")
      .then((res) => {
        this.cursos = res.data;
      })
      .catch(() => {
        this.mensagem = "Erro ao carregar cursos";
      });
  },

  methods: {
    realizarMatricula() {
      if (!this.nome || !this.email || !this.cursoSelecionado) {
        this.mensagem = "Preencha todos os campos";
        return;
      }

      axios
        .post("http://localhost:3000/matricula", {
          nome: this.nome,
          email: this.email,
          curso_id: this.cursoSelecionado,
        })

        .then(() => {
          this.mensagem = "Matrícula realizada com sucesso!";

          this.nome = "";
          this.email = "";
          this.cursoSelecionado = "";
        })
        .catch(() => {
          this.mensagem = "Erro ao realizar matrícula";
        });
    },
  },
};
</script>

<style>
.container {
  width: 420px;
  background: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  text-align: center;
}

h2 {
  margin-bottom: 20px;
  color: #2c3e50;
}

input,
select {
  width: 100%;
  padding: 12px;
  margin-top: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 14px;
  margin-top: 20px;
  background: #42b883;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #369f6e;
}

.mensagem {
  margin-top: 15px;
  font-weight: bold;
  color: green;
}
</style>
