<template>
  <div>
    <a href="#" class="facebook-signup" @click.prevent="loginWithFacebook">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
      acebook
    </a>

    <g-signin-button
      :params="googleSignInParams"
      @success="onSignInSuccess"
      @error="onSignInError">
      Sign in with Google
    </g-signin-button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import GSignInButton from 'vue-google-signin-button';
  import { initFbsdk } from './config/fbAuth.js';

  Vue.use(GSignInButton);

  export default {
    data() {
      return {
        googleSignInParams: {
          client_id: "8152271176-kmh3112u4e340vmk51q5i42g1unusr3m.apps.googleusercontent.com"
        },
      }
    },

    components: {
    },

    created: function() {
      initFbsdk()
    },

    methods: {
      async loginWithFacebook () {
        window.FB.login(async (response) => {
          await axios.post('http://localhost:3333/user/facebook', {
            accessToken: response.authResponse.accessToken,
            user_id: response.authResponse.userID,
          });
        })
      },

      onSignInSuccess (googleUser) {
        // `googleUser` is the GoogleUser object that represents the just-signed-in user.
        // See https://developers.google.com/identity/sign-in/web/reference#users
        const profile = googleUser.getBasicProfile() // etc etc
        console.log(profile);
      },
      onSignInError () {
        alert('Login bloqueado\n O Google não consegue acessar os cookies');
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
