import UserList from "../views/UserList.vue";
import Home from "../views/Home.vue"
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"

export default [
  {
    path: "/",
    name: "home",
    components: {
      select: Home,
    },
  },
  {
    path: "/userList",
    name: "userList",
    components: {
      select: UserList,
    },
  },
  {
    path: "/register",
    name: "register",
    components: {
      select: Register,
    },
  },
  {
    path: "/login",
    name: "login",
    components: {
      select: Login,
    },
  },
];
