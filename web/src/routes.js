import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Users from './pages/Users.vue';
import Film from './pages/Film.vue';
import Character from './pages/Character.vue';

const routes = [
  { path: '/home', name: 'home', component: Home },
  { path: '/users', name: 'users', component: Users },
  { path: '/film/:id', name: 'film', component: Film },
  { path: '/character/:id', name: 'character', component: Character },
  { path: '/', name: 'login', component: Login },
];

export default routes;