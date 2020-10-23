<template>
  <div class="container">
    <div class="content">
      <div class="introduction">
        <h1>Star Viewars</h1>

        <h3>Visualizador de dados sobre Star Wars</h3>
      </div>

      <div class="sign">
        <p>Acesse nossa plataforma de forma fácil!</p>
        <SignIn />
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from '../components/SignIn';

export default {
  components: {
    SignIn
  },
}
</script>

<style scoped>
.container {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #40454a;
  color: #fff;
}

.content {
  display: flex;
  flex-direction: column;
}

.introduction {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 75px;
}

.introduction h1 {
  font-size: 50px;
  margin-bottom: 15px;
}

.introduction h3 {
  font-weight: 400;
  font-size: 20px;
}

.sign p {
  margin-bottom: 5px;
  font-size: 15px;
}

@media(min-width: 1024px) {
  .content {
    flex-direction: row;
  }

  .introduction {
    margin-right: 100px;
    margin-bottom: 0;
  }
}
</style>