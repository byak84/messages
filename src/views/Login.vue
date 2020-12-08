<template>
  <!--  <div class="form_container">-->
  <!--    <div class="row card hoverable">-->
  <!--      <div class="card-content ">-->
  <!--        <h4 class="center blue-text">Login Form</h4>-->
  <!--        <form class="row s12" @submit.prevent="submitHandler">-->
  <!--          <div class="col s12">-->
  <!--            <div class="input-field">-->
  <!--              <input type="text" name="login" placeholder="Login*" v-model.trim="login">-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col s12">-->
  <!--            <div class="input-field">-->
  <!--              <input type="password" name="password" placeholder="Password*" v-model.trim="password">-->
  <!--            </div>-->
  <!--          </div>-->
  <!--          <div class="col s12">-->
  <!--            <p><label><input type="checkbox" />Remember me</label></p>-->
  <!--          </div>-->
  <!--          <div class="col s12 center">-->
  <!--            <button type="submit" class="btn btn-large waves-effect waves-light blue">Login<i-->
  <!--                class="material-icons right">send</i></button>-->

  <!--          </div>-->
  <!--          <div style="margin-top: 100px">-->
  <!--            <router-link to="/register">Register</router-link>-->
  <!--          </div>-->
  <!--        </form>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </div>-->
  <div class="form_container">
    <form class="card auth-card" v-on:submit.prevent="submitHandler">
      <div class="card-content">
        <span class="card-title">Авторизация</span>
        <div class="input-field">
          <input
              id="login"
              type="text"
              class="validate"
              v-model.trim="login"
          >
<!--          <label for="login">Email</label>-->
<!--          <small class="helper-text invalid">Email</small>-->
        </div>
        <div class="input-field">
          <input
              id="password"
              type="password"
              class="validate"
              v-model.trim="password"
          >
<!--          <label for="password">Пароль</label>-->
<!--          <small class="helper-text invalid">Password</small>-->
        </div>
      </div>
      <div class="card-action">
        <div>
          <button
              class="btn waves-effect waves-light auth-submit"
              type="submit"
          >
            Войти
            <i class="material-icons right">send</i>
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <router-link to="/register">Зарегистрироваться</router-link>
        </p>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  name: "login",
  data: () => {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    submitHandler() {
      const formData = {
        login: this.login,
        password: this.password
      }
      this.$store.dispatch('auth/login', formData)
          .then(() => this.$router.push({name: 'Home'}))
          .catch(err => alert(err))
    }
  }
}
</script>

<style scoped>
.btn {
  margin-top: 10px;

}

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