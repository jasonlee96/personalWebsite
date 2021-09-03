<template>
  <v-app>
    <NavBar />

    <v-main>
      <HelloWorld/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
    </v-main>
    <Footer />
  </v-app>
  
</template>

<script>
import { HelloWorld, NavBar, Footer, AboutMe, Portfolio, Contact } from './components';

import Vue from 'vue'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

export default {
  name: 'App',

  components: {
    NavBar,
    HelloWorld,
    Footer,
    AboutMe,
    Portfolio,
    Contact
  }
};
</script>

<style scoped>
  #app{
    color: white;
    background: #322D31;
    padding-bottom: 100px;
  }
</style>