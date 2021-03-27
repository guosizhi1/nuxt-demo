<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">{{ islogin ? ' Sign in' : 'Sign up' }}</h1>
          <p class="text-xs-center">
            <nuxt-link v-if="islogin" to="/register">
              Need an account?
            </nuxt-link>
            <nuxt-link v-else to="/login"> Have an account? </nuxt-link>
          </p>

          <ul class="error-messages" v-if="error">
            <li v-for="(item, i) in error" :key="item">{{ i }}{{ item }}</li>
          </ul>

          <form @submit.prevent="onSubmit">
            <fieldset class="form-group" v-if="!islogin">
              <input
                class="form-control form-control-lg"
                required
                type="text"
                v-model="user.username"
                placeholder="Your Name"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="email"
                required
                placeholder="Email"
                v-model="user.email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                class="form-control form-control-lg"
                type="password"
                required
                placeholder="Password"
                v-model="user.password"
              />
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right">
              {{ islogin ? ' Sign in' : 'Sign up' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { login, register } from '@/api/user'
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  name: 'loginIndex',
  middleware: 'noauth',
  computed: {
    islogin() {
      return this.$route.name === 'login'
    },
  },
  data() {
    return {
      user: {
        username: '',
        email: '',
        password: '',
      },
      error: {},
    }
  },
  methods: {
    async onSubmit() {
      try {
        const { data } = this.islogin
          ? await login({
              user: this.user,
            })
          : await register({
              user: this.user,
            })
        this.$store.commit('setUser', data.user)
        this.$router.push('/')
        Cookie.set('user', data.user)
      } catch (err) {
        this.error = err.response.data.errors
        console.log(this.error)
      }
    },
  },
}
</script>

<style></style>
