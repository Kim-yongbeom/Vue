<template>
  <v-app>
    <router-link to="/">홈</router-link>
    <router-link to="/userList">유저리스트</router-link>
    <template>
      <router-link to="/login">로그인</router-link>
      <router-link to="/register">회원가입</router-link>
    </template>
    <v-app>
      <router-view name="select"></router-view>
    </v-app>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    token: localStorage.getItem('token') ? localStorage.getItem('token') : ''
  })
};
</script>
