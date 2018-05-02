<template>
  <div id="app">
    <div id="main-body">
      <div class="route-container">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<style>
  html, body {
    height: 100%;
    max-height: 100%;
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    height: 100%;
  }
  #main-body {
    flex: 1;
    overflow: hidden;
  }
.route-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    overflow: scroll;
}
</style>
