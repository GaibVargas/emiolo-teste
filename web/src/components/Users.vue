<template>
  <div>
    <div v-if="users.length > 0">
      <div class="users" v-for="user in users" :key="user._id">
        <User :user="user" />
      </div>
    </div>

    <div v-else><p>Carregando usuários...</p></div>
  </div>
</template>

<script>
import axios from 'axios';
import User from './User';

export default {
  data() {
    return {
      users: []
    }
  },

  components: {
    User
  },

  created: async function() {
    const { data } = await axios.get('http://localhost:3333/users');

    this.users = data;
  }
}
</script>