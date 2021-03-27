import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52764b9c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _c02c8c5e = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _5d85c8b7 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _4f95df57 = () => interopDefault(import('..\\pages\\Profile' /* webpackChunkName: "" */))
const _752dcc1e = () => interopDefault(import('..\\pages\\setting' /* webpackChunkName: "" */))
const _46a771df = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _59b0ea78 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _52764b9c,
    children: [{
      path: "",
      component: _c02c8c5e,
      name: "home"
    }, {
      path: "/login",
      component: _5d85c8b7,
      name: "login"
    }, {
      path: "/register",
      component: _5d85c8b7,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _4f95df57,
      name: "profile"
    }, {
      path: "/setting",
      component: _752dcc1e,
      name: "setting"
    }, {
      path: "/editor",
      component: _46a771df,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _59b0ea78,
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
