import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3675bfa2 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _9a0ad1b8 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _a6ded478 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _07219d24 = () => interopDefault(import('..\\pages\\Profile' /* webpackChunkName: "" */))
const _2cb989eb = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _4e13731c = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _ea996ede = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _3675bfa2,
    children: [{
      path: "",
      component: _9a0ad1b8,
      name: "home"
    }, {
      path: "/login",
      component: _a6ded478,
      name: "login"
    }, {
      path: "/register",
      component: _a6ded478,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _07219d24,
      name: "profile"
    }, {
      path: "/setting",
      component: _2cb989eb,
      name: "setting"
    }, {
      path: "/editor",
      component: _4e13731c,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _ea996ede,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
