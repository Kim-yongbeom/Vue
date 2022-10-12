import UserList from "../views/UserList.vue";
import Home from "../views/Home.vue";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import store from "../store";

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
    beforeEnter: (to, from, next) => {
      console.log(store.state.name);
      // store.state.name
      // console.log(JSON.parse(localStorage.getItem("vuex")).name);
      if (JSON.parse(localStorage.getItem(store.state.name)).grade === "대리") {
        next();
      } else {
        next("/");
        alert("권한이 없습니다.");
      }
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
