<template>
  <div class="form_container">
    <form class="card auth-card" v-on:submit.prevent="submitHandler">
      <div class="card-content">
        <span class="card-title">Регистрация</span>
        <div class="input-field">
          <input
              id="login"
              type="text"
          >
          <label for="login">Email</label>
<!--                    <small class="helper-text invalid">Email</small>-->
        </div>
        <div class="input-field">
          <input
              id="password"
              type="password"
              class="validate"
          >
          <label for="password">Пароль</label>
          <!--          <small class="helper-text invalid">Password</small>-->
        </div>
        <div class="input-field">
          <input
              id="firstname"
              type="text"
              class="validate"
          >
          <label for="firstname">Имя</label>
          <!--          <small class="helper-text invalid">Name</small>-->
        </div>
        <div class="input-field">
          <input
              id="lastname"
              type="text"
              class="validate"
          >
          <label for="lastname">Фамилия</label>
          <!--          <small class="helper-text invalid">Name</small>-->
        </div>
        <p>
          <label>
            <input type="checkbox"/>
            <span>С правилами согласен</span>
          </label>
        </p>
      </div>
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect waves-light auth-submit"
              type="submit"
          >
            Зарегистрироваться
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Уже есть аккаунт?
          <router-link to="/login">Войти!</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Register",
  methods: {
    register() {
      this.$store.dispatch()
    }
  },
}

</script>

<style scoped>

.form_container {
  margin: 0 auto;
  padding: 100px;
  width: 50%;
  /*border: 1px #42b983 solid;*/
}

@media (max-width: 952px) {
  .form_container {
    width: 60%;
  }
}

@media (max-width: 700px) {
  .form_container {
    width: 80%;
  }
}

@media (max-width: 500px) {
  .form_container {
    width: 95%;
    /*min-width: 300px;*/
  }
}

</style>