<template>
  <nav>
    <router-link to="/">About</router-link>
    <span> | </span>
    <router-link to="/registration">Registration</router-link>
    <span> | </span>
    <router-link to="/dynamicForm">Dynamic Form</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  background: #eee;
}
</style>
