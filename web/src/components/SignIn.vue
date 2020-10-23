<template>
  <div class="sign-in-container">
    <button class="facebook-signup" @click.prevent="loginWithFacebook">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#3578E5"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
      Continue com Facebook
    </button>

    <g-signin-button
      :params="googleSignInParams"
      @success="onSignInGoogleSuccess"
      @error="onSignInGoogleError">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><title>Google</title><g fill="none" fill-rule="evenodd"><path fill="#4285F4" d="M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4814h4.8436c-.2086 1.125-.8427 2.0782-1.7959 2.7164v2.2581h2.9087c1.7018-1.5668 2.6836-3.874 2.6836-6.615z"></path><path fill="#34A853" d="M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9087-2.2581c-.8059.54-1.8368.859-3.0477.859-2.344 0-4.3282-1.5831-5.036-3.7104H.9574v2.3318C2.4382 15.9832 5.4818 18 9 18z"></path><path fill="#FBBC05" d="M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573A8.9965 8.9965 0 0 0 0 9c0 1.4523.3477 2.8268.9573 4.0418L3.964 10.71z"></path><path fill="#EA4335" d="M9 3.5795c1.3214 0 2.5077.4541 3.4405 1.346l2.5813-2.5814C13.4632.8918 11.426 0 9 0 5.4818 0 2.4382 2.0168.9573 4.9582L3.964 7.29C4.6718 5.1627 6.6559 3.5795 9 3.5795z"></path></g></svg>
      Continue com Google
    </g-signin-button>
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';
  import GSignInButton from 'vue-google-signin-button';
  import { initFbsdk } from '../config/fbAuth.js';

  Vue.use(GSignInButton);

  export default {
    data() {
      return {
        googleSignInParams: {
          client_id: "8152271176-kmh3112u4e340vmk51q5i42g1unusr3m.apps.googleusercontent.com"
        },
      }
    },

    created: function() {
      initFbsdk()
    },

    methods: {
      async loginWithFacebook () {
        window.FB.login(async (response) => {
          if(!response.authResponse) return;

          /*const res = */await axios.post('http://localhost:3333/user/facebook', {
            accessToken: response.authResponse.accessToken,
            user_id: response.authResponse.userID,
          });

          this.$router.push({ name: 'home', /*params: { id: res.data.id, type: 'facebook' }*/});
        })
      },

      async onSignInGoogleSuccess (googleUser) {
        const profile = googleUser.getBasicProfile();
        /*const res = */await axios.post('http://localhost:3333/user/google', {
          name: profile.Ad,
          image_url: profile.ZJ,
          provider_id: profile.KT
        });

        this.$router.push({ name: 'home', /*params: { id: res.data.id, type: 'google' } */});
      },

      onSignInGoogleError (error) {
        console.log(error);
      },
    }
  }
</script>

<style scoped>
  .sign-in-container {
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .g-signin-button, .facebook-signup {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 40px;
    border-radius: 4px;
    font-size: 16px;
    font-family: sans-serif;
    background: #eee;
    margin: 0;
    padding: 0;
    cursor: pointer;
    color: #303030;
    border: none;
  }

  .g-signin-button:hover, .facebook-signup:hover {
    background: #deeaff;
  }

  .g-signin-button svg, .facebook-signup svg {
    margin-right: 15px;
  }

  .g-signin-button {
    width: 348px;
    margin-top: 15px;
  }
</style>