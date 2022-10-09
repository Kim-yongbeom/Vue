<template>
    <validation-observer
      ref="observer"
      v-slot="{ invalid }"
    >
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
          name="Name"
          rules="required|max:10|min:1"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            :error-messages="errors"
            label="Name"
            required
          ></v-text-field>
        </validation-provider>

        <validation-provider
          v-slot="{ errors }"
          name="Password"
          rules="required|max:20|min:6"
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
          @click="userSave"
        >
          submit
        </v-btn>
        <v-btn @click="clear">
          clear
        </v-btn>
      </form>
    </validation-observer>
  </template>
  
<script>
import { required, email, max, min, regex } from 'vee-validate/dist/rules'
import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

setInteractionMode('eager')

extend('required', {
  ...required,
  message: '{_field_}은 반드시 입력해야 합니다.',
})

extend('max', {
  ...max,
  message: '{_field_}은 {length}글자 이하여야 합니다.',
})

extend('min', {
  ...min,
  message: '{_field_}은 {length}글자 이상이여야 합니다.',
})

extend('regex', {
  ...regex,
  message: '{_field_} {_value_} does not match {regex}',
})

extend('email', {
  ...email,
  message: 'Email must be valid',
})

export default {
  name: "register",
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data: () => ({
    email: '',
    name: '',
    password: '',
  }),
  methods: {
    userSave() {
      if(localStorage.getItem(this.email)){
        alert('이미 존재하는 이메일입니다!')
      }else{
        localStorage.setItem(this.email, JSON.stringify({name: this.name, password: this.password}))
      }
    },
    submit () {
      this.$refs.observer.validate()
      this.$router.push('/login')
    },
    clear () {
      this.name = ''
      this.email = ''
      this.password = ''
      this.$refs.observer.reset()
    },
  },
}
</script>