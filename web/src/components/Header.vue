<template>
  <div class="header">
    <nav>
      <h1>Star Viewars</h1>

      <ul>
        <li><router-link to="/home">Filmes</router-link></li>
        <li><router-link to="/users">Usuários</router-link></li>
      </ul>
    </nav>

    <button @click.prevent="logout">Sair</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      window.FB.logout(() => {
        this.$router.push('/').catch(() => {});
      });
      
      window.gapi.auth2.getAuthInstance().signOut().then(() => {
        this.$router.push('/').catch(() => {});
      });
    }
  }
}
</script>

<style scoped>
.header {
  background: #33373b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 25px;
  width: 100vw;
}

.header button {
  background: transparent;
  color: #fff;
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 5px 15px;
  cursor: pointer;
}

nav {
  color: #fff;
  display: flex;
  align-items: center;
}

.user {
  display: flex;
  align-items: center;
}

.user span {
  margin-left: 15px;
  font-size: 18px;
}

.user img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

ul {
  margin-left: 150px;
  list-style: none;
  display: flex;
}

li {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #eee;
}

li + li {
  margin-left: 50px;
}

li:hover {
  font-weight: bolder;
}
</style>