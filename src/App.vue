<template>
  <div id="app" class="app">

    <component :is="layout">

    </component>

  </div>
</template>

<script>
import MainLayout from "@/layouts/MainLayout"
import EmptyLayout from "@/layouts/EmptyLayout"
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout, MainLayout
  }
}
</script>

<style>
.app,body, html {
  /*max-width: 1700px;*/
  /* border: 1px solid; */
  margin: 0px auto;
  align-content: center;
  align-items: center;
  height: 100%;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
