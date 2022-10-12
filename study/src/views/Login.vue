<template>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
        <h1>
            로그인 페이지
        </h1>
      <form @submit.prevent="submit">
        <validation-provider
          v-slot="{ errors }"
          name="email"
          rules="required|email"
        >
          <v-text-field
            v-model="email"
            :error-messages="errors"
            label="E-mail"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Password"
          rules="required"
        >
          <v-text-field
            type="password"
            v-model="password"
            :counter="20"
            :error-messages="errors"
            label="Password"
            required
          ></v-text-field>
        </validation-provider>

        <v-btn
          class="mr-4"
          type="submit"
          :disabled="invalid"
        >
          로그인
        </v-btn>
      </form>
    </validation-observer>
  </template>
  
<script>
import { required, email, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_}은 반드시 입력해야 합니다.',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: '이메일 형식이 아닙니다.',
})

export default {
  name: "login",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: '',
    password: '',
    info: [],
  }),
  methods: {
    submit () {
      this.$refs.observer.validate()
      for (let i=0; i<localStorage.length; i++){
        if(localStorage.key(i) === this.email && JSON.parse(localStorage.getItem(localStorage.key(i))).password === this.password){
          localStorage.setItem('token', 123)
          for (let i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i) == "token" || localStorage.key(i) == 'board' || localStorage.key(i) == "loglevel:webpack-dev-server" || localStorage.key(i) == "vuex") {
              continue;
            }
            this.info.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
          }
          this.$store.commit('USER_EMAIL', {
            email: this.email
          })
          this.$store.commit('USER_LIST', {
            list: this.info
          })
          this.$router.push('/')
          break
        }else if((i===localStorage.length-1 && localStorage.key(i)!==this.email) 
        || (i===localStorage.length-1 && JSON.parse(localStorage.getItem(localStorage.key(i))).password !== this.password)){
          alert('아이디 또는 비밀번호가 잘못되었습니다.')
        }
      }
    },
  },
}
</script>