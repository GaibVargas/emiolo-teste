<template>
  <div>
    <button @click.prevent="searchFilm">
      Episódio {{film.episode_id}}: {{ film.title }}
    </button>
    <span>({{ film.release_date.split('-')[0] }})</span>
  </div>
</template>

<script>
export default {
  props: {
    film: Object
  },

  methods: {
    searchFilm() {
      const film_url_array = this.film.url.split('/');
      const film_id = film_url_array[film_url_array.length - 2];

      this.$router.push({ name: 'film', params: { id: film_id } });
    }
  }
}
</script>

<style scoped>
button {
  border: none;
  color: #eee;
  background: transparent;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  text-decoration: underline;
}

div {
  background: #42484d;
  margin-bottom: 5px;
  padding: 10px;
  border-radius: 4px;
}
</style>