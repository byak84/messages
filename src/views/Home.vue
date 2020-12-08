<template>
  <div class="main">
    <msg-form/>
    <msg-list v-bind:msg-array="this['message/allMessages']"/>
  </div>
</template>

<script>
import msgList from "@/components/msgList";
import msgForm from "@/components/msgform";

import {mapGetters, mapActions} from "vuex";

export default {
  name: "Home",
  components: {
    msgList, msgForm,
  },
  computed: {
    ...mapGetters(['message/allMessages', 'auth/isAuth'])
  },
  methods: {
    ...mapActions(['message/fetchMessages'])
  },

  mounted() {
    if (this.$store.getters["auth/isAuth"]) {
      this.$store.dispatch("message/fetchMessages")
          .catch(err => {
            this.$router.push({name: "Login"})
          })
    } else this.$router.push({name: 'Login'})

  },
};
</script>

<style scoped>
.main {
  /*border: 4px chartreuse solid;*/
  width: 100%;
  display: flex;
  alignment: center;
  text-align: center;
  justify-content: space-around;
  flex-wrap: wrap
}
</style>>

