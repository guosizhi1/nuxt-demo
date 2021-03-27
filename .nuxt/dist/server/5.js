exports.ids = [5];
exports.modules = {

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setUser; });
/* harmony import */ var _plugins_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 //登录

const login = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users/login",
    data
  });
}; //  注册

const register = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: "/api/users",
    data
  });
}; //获取用户数据

const getUser = () => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/user"
  });
}; // 修改个人中心

const setUser = data => {
  return Object(_plugins_request__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "PUT",
    url: "/api/user",
    data
  });
};

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/index.vue?vue&type=template&id=c61f11ec&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"settings-page"},[_vm._ssrNode(((_vm.user)?("<div class=\"container page\"><div class=\"row\"><div class=\"col-md-6 offset-md-3 col-xs-12\"><h1 class=\"text-xs-center\">Your Settings</h1> <form><fieldset><fieldset class=\"form-group\"><input type=\"text\" placeholder=\"URL of profile picture\""+(_vm._ssrAttr("value",(_vm.user.image)))+" class=\"form-control\"></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Your Name\""+(_vm._ssrAttr("value",(_vm.user.username)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><textarea rows=\"8\" placeholder=\"Short bio about you\" class=\"form-control form-control-lg\">"+_vm._ssrEscape(_vm._s(_vm.user.bio))+"</textarea></fieldset> <fieldset class=\"form-group\"><input type=\"text\" placeholder=\"Email\""+(_vm._ssrAttr("value",(_vm.user.email)))+" class=\"form-control form-control-lg\"></fieldset> <fieldset class=\"form-group\"><input type=\"password\" placeholder=\"Password\""+(_vm._ssrAttr("value",(_vm.user.password)))+" class=\"form-control form-control-lg\"></fieldset> <button"+(_vm._ssrAttr("disabled",_vm.dis))+" class=\"btn btn-lg btn-primary pull-xs-right\">\n              Update Settings\n            </button></fieldset></form> <hr> <button class=\"btn btn-outline-danger\">\n        Or click here to logout.\n      </button></div></div></div>"):"<!---->"))])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/setting/index.vue?vue&type=template&id=c61f11ec&

// EXTERNAL MODULE: ./api/user.js
var user = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/setting/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : undefined;
/* harmony default export */ var settingvue_type_script_lang_js_ = ({
  middleware: 'auth',
  name: 'settingIndex',

  data() {
    return {
      dis: false,
      user: null
    };
  },

  async created() {
    const {
      data
    } = await Object(user["a" /* getUser */])();
    this.user = data.user;
    console.log(data.user);
  },

  methods: {
    async onSubmit() {
      this.dis = true;
      const {
        data
      } = await Object(user["d" /* setUser */])({
        user: this.user
      });
      this.$store.commit("setUser", data.user);
      Cookie.set('user', data.user);
      this.$router.go(-1);
      this.dis = true;
    },

    logout() {
      this.$store.commit("setUser", ""), Cookie.remove('user');
      this.$router.push("/");
    }

  }
});
// CONCATENATED MODULE: ./pages/setting/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_settingvue_type_script_lang_js_ = (settingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/setting/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_settingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "0b733eda"
  
)

/* harmony default export */ var setting = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=5.js.map