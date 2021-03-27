<template>
  <div>
    <!-- 头部 -->
    <nav class="navbar navbar-light">
      <div class="container">
        <nuxt-link to="/" class="navbar-brand">conduit</nuxt-link>
        <ul class="nav navbar-nav pull-xs-right">
          <li class="nav-item">
            <!-- Add "active" class when you're on that page" -->
            <nuxt-link to="/" exact class="nav-link">Home</nuxt-link>
          </li>
          <template v-if="user">
            <li class="nav-item">
              <nuxt-link to="/editor" exact class="nav-link">
                <i class="ion-compose"></i>&nbsp;New Post
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/setting" exact class="nav-link">
                <i class="ion-gear-a"></i>&nbsp;Settings
              </nuxt-link>
            </li>

            <li class="nav-item">
              <nuxt-link :to="{
                name:'profile',
                params:{
                  username:user.username
                }
              }" exact class="nav-link">
                <img :src="user.name" class="user-pic" alt="" />
                {{ user.username }}
              </nuxt-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <nuxt-link class="nav-link" exact to="/login">Sign up</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" exact to="/register"
                >Sign up</nuxt-link
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
    <nuxt-child />
    <!-- 底部 -->
    <footer>
      <div class="container">
        <nuxt-link to="/" class="logo-font">conduit</nuxt-link>
        <span class="attribution">
          An interactive learning project from
          <nuxt-link to="/">Thinkster</nuxt-link>. Code &amp; design licensed
          under MIT.
        </span>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'layoutIndex',
  middleware: 'noauth',
  computed: {
    ...mapState(['user']),
  },
}
</script>

<style></style>
