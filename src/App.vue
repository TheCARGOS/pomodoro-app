<template>
  <div id="app" class="main-app">
    <h1 class="main-title">Pomodoro</h1>
    <options></options>
    <timer></timer>
    <settings></settings>
  </div>
</template>

<script>
import Options from './components/Options.vue'
import Timer from './components/Timer.vue'
import Settings from './components/Settings.vue'

export default {
  name: 'App',
  components: {
    Options,
    Timer,
    Settings
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: bolder;
    font-family: Raleway;
    letter-spacing: 1.5px;
  }

  .main-app {
    background: #1E2140;
    background: radial-gradient(#262B55, #1E2140);
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  .main-title {
    font-size: 24px;
    color: snow;
  }
</style>
