<template>
  <div class="content">
    <Header :platform="type" />
    <div class="user">
      <div class="users">
        <h3>Todos os usuários do aplicativo</h3>

        <Users />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import Users from '../components/Users';

export default {
  components: {
    Header,
    Users
  },

  data() {
    return {
      user: Object,
      type: String,
    }
  },

  created: async function() {
    this.type = this.$route.params.type;
  },  
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

.user {
  padding: 20px 40px;
}

.users {
  margin-top: 15px;
}

.users h3 {
  margin-bottom: 15px;
}
</style>