<template>
  <div id="app">
    <Nav/>
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
export default {
  name: 'App',
  components: {
    Nav:Nav
  },


}
</script>

<style>
@import "./style/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

}
body{
  background: #EEE;
}
</style>
