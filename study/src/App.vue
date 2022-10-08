<template>
  <v-app>
    <v-app>
      <router-view name="home"></router-view>
      <router-view name="userList"></router-view>
    </v-app>
    <router-view/>
  </v-app>
</template>

<script>

export default {
  name: 'App',
};
</script>
