import UserList from "../views/UserList.vue";
import Home from "../views/Home.vue"

export default [
  {
    path: "/",
    name: "home",
    components: {
      home: Home,
    },
  },
  {
    path: "/userList",
    name: "userList",
    components: {
      userList: UserList,
    },
  },
];
