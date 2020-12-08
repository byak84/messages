<template>
  <div class="header">
    <div id="nav">
      <router-link to="/">Сообщения</router-link> |
      <router-link to="/about">О программе</router-link>
    </div>

    <router-view/>

  </div>
</template>

<style scoped>
.header {
  margin: 0px 0px 10px;
  padding: 0;
  /*border: 2px crimson solid;*/
}
#nav {
  padding: 0px;
  margin: 0;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>