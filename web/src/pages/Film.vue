<template>
  <div class="content">
    <Header />

    <div class="film-container">
      <div class="film" v-if="film.title !== undefined">
        <h2>Episódio {{ film.episode_id }}: {{ film.title }}</h2>

        <p>Data de lançamento: {{ film.release_date.split('-')[2] }}/{{ film.release_date.split('-')[1] }}/{{ film.release_date.split('-')[0] }}</p>
        <p>Diretor: {{ film.director }}</p>
        <p>Produtores: {{ film.producer }}</p>

        <p class="crawl">Texto de abertura: {{ film.opening_crawl }}</p>

        <div class="characters">
          <h3>Personagens: </h3>
          <button v-for="char in characters" :key="char.id" @click.prevent="navigateToCharacterPage(char.id)">
            {{ char.name }}
          </button>
        </div>

        <button @click.prevent="goBack">Voltar</button>
      </div>
      <div v-else><p>Carregando filme...</p></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Header from '../components/Header';

export default {
  data() {
    return {
      film: {},
      characters: [],
    }
  },

  components: {
    Header
  },

  created: async function() {
    const { data } = await axios.get(`https://swapi.dev/api/films/${this.$route.params.id}/`);

    data.characters.forEach(async (url) => {
      const response = await axios.get(url);
      this.characters = [...this.characters, { 
        name: response.data.name,
        id: response.data.url.split('/')[[response.data.url.split('/').length - 2]]  
      }];
    });

    this.film = data;
  },

  methods: {
    navigateToCharacterPage(id) {
      this.$router.push({ name: 'character', params: { id } })
    },

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

.film-container {
  padding: 20px 40px;
}

.film h2 {
  margin-top: 15px;
  margin-bottom: 15px;
}

p {
  margin-bottom: 10px;
  font-size: 18px;
  background: #42484d;
  padding: 10px 20px;
  border-radius: 4px;
}

p.crawl {
  line-height: 25px;
  text-align: justify;
}

.characters {
  background: #42484d;
  padding: 10px 20px;
  border-radius: 4px;
}

.characters h3 {
  margin-bottom: 15px;
}

.characters button {
  width: 50%;
  text-align: start;
  font-size: 18px;
  margin-bottom: 5px;
  padding: 5px 0;
  padding-left: 10px;
  background: transparent;
  color: #eee;
  border: none;
  cursor: pointer;
}

.characters button:hover {
  text-decoration: underline;
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