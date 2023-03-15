<template>
  <nav class="nav__bar">
    <div class="nav__bar-logo">
      <img src="@/assets/logo.png" alt="Vue logo" />
    </div>

    <div class="nav__link">
      <router-link class="links" to="/">Home</router-link>
      <router-link class="links" to="/counter">Counter</router-link>
    </div>
  </nav>
  <router-view />
  <FooterView />
</template>

<script>
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'App',
  components: {
    FooterView,


  },
};
</script>

<style>
/*IMPORT GOOGLE FONT Monteserrat*/
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

/*NAVBAR*/

.nav__bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  height: 80px;
  background: #3F497F;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}

.nav__bar-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__bar-logo img {
  width: 50px;
  height: 50px;
}

.nav__link {
  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__link .links {
  margin: 0 1rem;
}


.nav__bar a {
  color: #fff;
  font-weight: 700;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
}

.nav__bar a:hover {
  text-decoration: underline;
  transform: scale(1.05);
  color: #fff;
  background: linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
}

.nav__bar a:active {
  transform: scale(0.95);
}

.nav__bar a.router-link-exact-active {
  background: linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
  color: #727171;
}

.nav__bar a:link {
  color: #2c3e50;
}
</style>
