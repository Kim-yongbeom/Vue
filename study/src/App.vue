<template>
  <v-app>
    <router-link to="/">홈</router-link>
    <template v-if="token">
      <router-link to="/userList">유저리스트</router-link>
      <a href="/" @click="logout">로그아웃</a>
    </template>
    <template v-else>
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
  data (){
    return {
      get token() {
        return localStorage.getItem('token') || 0;
      },
    }
  },
  methods: { 
    logout(){
      localStorage.removeItem('token')
      this.$store.commit('LOGOUT', {
        name: '',
        user: []
      })
    }
  }
};
</script>
