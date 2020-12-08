<template>
  <div class="card">
    <div class="card_body">
      <div class="title">
        <div class="caption">{{ message.title }}</div>
        <div class="user_login">{{ message.user.login }}</div>
      </div>
      <div class="text">
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "msgCard",
  props: ['message']
}
</script>

<style scoped>
.card {
  /*border: 1px #2c3e50 solid;*/
  border-radius: 5px;
  width: 100%;
  margin: 0px 20px 40px 0px;
  padding: 0px;
  /*box-shadow: 0px 0px 12px 3px rgba(103, 99, 99, 0.7);*/
  min-width: 150px;
}

.card_body {
  padding: 10px;
}

.title {
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;
}

.caption {
  font-weight: 700;
  font-size: 19px;
  margin: 0;
  padding: 0;
}

.user_login {
  color: blue;
  font-size: .9rem;
  cursor: pointer;
}
</style>