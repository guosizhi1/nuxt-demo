module.exports = {
  router: {
    linkActiveClass: "active",
    extendRoutes: (routes, resolve) => {
      routes.splice(0);
      routes.push(
        ...[
          {
            path: "/",
            component: resolve(__dirname, "pages/layout/"),
            children: [
              {
                name: "home",
                path: "",
                component: resolve(__dirname, "pages/home/"),
              },
              {
                name: "login",
                path: "/login",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                name: "register",
                path: "/register",
                component: resolve(__dirname, "pages/login/"),
              },
              {
                name: "profile",
                path: "/profile/:username",
                component: resolve(__dirname, "pages/Profile/"),
              },
              {
                name: "setting",
                path: "/setting",
                component: resolve(__dirname, "pages/setting/"),
              },
              {
                name: "editor",
                path: "/editor",
                component: resolve(__dirname, "pages/editor/"),
              },
              {
                name: "article",
                path: "/article/:slug",
                component: resolve(__dirname, "pages/article/"),
              }
            ]
          }
        ]
      )
    }
  },
  plugins: [
    '~/plugins/request.js',
    '~/plugins/day.js'
  ]
}