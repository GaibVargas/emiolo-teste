<template>
  <div class="content">
    <Header />

    <div class="character" v-if="user.name !== undefined">
      <h2>{{ user.name }}</h2>

      <p>Altura: {{ String(user.height / 100).replace('.', ',') }}m</p>
      <p>Peso: {{ user.mass }}kg</p>
      <p>Gênero: {{ user.gender === 'n/a' ? 'Inidentificável' : user.gender === 'male' ? 'Masculino' : 'Feminino' }} </p>

      <button @click.prevent="goBack">Voltar</button>
    </div>

    <div v-else><p>Carregando personagem...</p></div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header';

export default {
  components: {
    Header
  },

  data() {
    return {
      user: {}
    }
  },

  created: async function() {
    const { data } = await axios.get(`https://swapi.dev/api/people/${this.$route.params.id}/`);

    this.user = data;
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped>
.content {
  color: #eee;
  background: #40454a;
  min-height: 100vh;
}

.character {
  padding: 20px 40px;
}

h2 {
  margin: 15px 0;
}

p {
  margin: 10px 0;
}

button {
  margin-top: 15px;
  background: transparent;
  border: 1px solid #eee;
  color: #eee;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}
</style>