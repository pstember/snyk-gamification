<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" style="height: 300px;">
    <game/>
    <br/>
    <footer-element/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Game from './components/Game.vue';
import FooterElement from './components/TheFooter.vue';

@Component({
  components: {
    Game,
    FooterElement,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f8f9fa;
}
</style>
