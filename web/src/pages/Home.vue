<template>
  <div class="content">
    <Header />
    
    <div class="films" v-if="films.length > 0">
      <h3>Filmes da série Star Wars</h3>
      <div class="film" v-for="film in films" :key="film.episode_id">
        <Film :film="film" />
      </div>
    </div>

    <div v-else><p>Carregando filmes...</p></div>
  </div>
</template>
<script>
import axios from 'axios';
import Header from '../components/Header';
import Film from '../components/Film';

export default {
  data() {
    return {
      films: []
    }
  },

  created: async function() {
    const { data } = await axios.get('https://swapi.dev/api/films/');

    this.films = data.results;
  },

  components: {
    Header,
    Film
  }
}
</script>

<style scoped>
.content {
  color: #eee;
  background: #40454a;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.films {
  padding: 20px 40px;
}

.films h3 {
  margin: 15px 0;
}
</style>