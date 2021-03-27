exports.ids = [1];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getYourFeed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addfavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return delfavorite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return articlesDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addArticles; });
/* harmony import */ var _plugins_request_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
 //文章列表

const getList = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles",
    data
  });
}; //  获取标签

const getTags = () => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/tags"
  });
}; //获取点赞文章

const getYourFeed = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: "/api/articles/feed"
  });
}; // 点赞

const addfavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: `/api/articles/${slug}/favorite`
  });
}; // 取消点赞

const delfavorite = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`
  });
}; // 文章详情

const articlesDetails = slug => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "GET",
    url: `/api/articles/${slug}`
  });
}; //添加文章

const addArticles = data => {
  return Object(_plugins_request_js__WEBPACK_IMPORTED_MODULE_0__[/* request */ "b"])({
    method: "POST",
    url: '/api/articles',
    data
  });
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=template&id=1a61a462&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-page"},[_vm._ssrNode("<div class=\"banner\">","</div>",[_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>"+_vm._ssrEscape(_vm._s(_vm.article.title))+"</h1> "),_c('favorite',{attrs:{"article":_vm.article}})],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row article-content\"><div class=\"col-md-12\"><p>"+_vm._ssrEscape("\n          "+_vm._s(_vm.article.body)+"\n        ")+"</p> <h2 id=\"introducing-ionic\">"+_vm._ssrEscape(_vm._s(_vm.article.description))+"</h2></div></div> <hr> "),_vm._ssrNode("<div class=\"article-actions\">","</div>",[_c('favorite',{attrs:{"article":_vm.article}})],1),_vm._ssrNode(" <div class=\"row\"><div class=\"col-xs-12 col-md-8 offset-md-2\"><form class=\"card comment-form\"><div class=\"card-block\"><textarea placeholder=\"Write a comment...\" rows=\"3\" class=\"form-control\"></textarea></div> <div class=\"card-footer\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"> <button class=\"btn btn-sm btn-primary\">Post Comment</button></div></form> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">\n              With supporting text below as a natural lead-in to additional\n              content.\n            </p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span></div></div> <div class=\"card\"><div class=\"card-block\"><p class=\"card-text\">\n              With supporting text below as a natural lead-in to additional\n              content.\n            </p></div> <div class=\"card-footer\"><a href class=\"comment-author\"><img src=\"http://i.imgur.com/Qr71crq.jpg\" class=\"comment-author-img\"></a>\n             \n            <a href class=\"comment-author\">Jacob Schmidt</a> <span class=\"date-posted\">Dec 29th</span> <span class=\"mod-options\"><i class=\"ion-edit\"></i> <i class=\"ion-trash-a\"></i></span></div></div></div></div>")],2)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=template&id=1a61a462&

// EXTERNAL MODULE: ./api/article.js
var api_article = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/index.vue?vue&type=template&id=fcfd73b4&
var componentsvue_type_template_id_fcfd73b4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-meta"},[_vm._ssrNode("<a href><img"+(_vm._ssrAttr("src",_vm.article.author.image))+"></a> <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(_vm.article.author.username))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(_vm.article.createdAt,"MMM DD YYYY")))+"</span></div> <button class=\"btn btn-sm btn-outline-secondary\"><i class=\"ion-plus-round\"></i>\n      Follow Eric Simons <span class=\"counter\">(10)</span></button>\n    \n  <button"+(_vm._ssrClass("btn btn-sm btn-primary",{
      'btn-outline-primary': _vm.article.favorited,
    }))+"><i class=\"ion-heart\"></i>\n      Favorite Post\n    <span class=\"counter\">"+_vm._ssrEscape("("+_vm._s(_vm.article.favoritesCount)+")")+"</span></button>")])}
var componentsvue_type_template_id_fcfd73b4_staticRenderFns = []


// CONCATENATED MODULE: ./pages/article/components/index.vue?vue&type=template&id=fcfd73b4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/components/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var componentsvue_type_script_lang_js_ = ({
  name: "favorite",
  props: {
    article: {
      type: Object,
      require: true
    }
  },
  methods: {
    async onfavorite(item) {
      item.favoritDisable = true;

      if (item.favorited) {
        //取消点赞
        await Object(api_article["d" /* delfavorite */])(item.slug);
        item.favorited = false;
        item.favoritesCount += -1;
      } else {
        //点赞
        await Object(api_article["b" /* addfavorite */])(item.slug);
        item.favorited = true;
        item.favoritesCount += 1;
      }

      item.favoritDisable = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/article/components/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var article_componentsvue_type_script_lang_js_ = (componentsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/article/components/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  article_componentsvue_type_script_lang_js_,
  componentsvue_type_template_id_fcfd73b4_render,
  componentsvue_type_template_id_fcfd73b4_staticRenderFns,
  false,
  injectStyles,
  null,
  "68eeabce"
  
)

/* harmony default export */ var components = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/article/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var articlevue_type_script_lang_js_ = ({
  name: "articleIndex",

  async asyncData({
    params
  }) {
    console.log(params);
    const info = await Object(api_article["c" /* articlesDetails */])(params.slug);
    const {
      article
    } = info.data;
    article.favoritDisable = false;
    return {
      article
    };
  },

  components: {
    favorite: components
  }
});
// CONCATENATED MODULE: ./pages/article/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_articlevue_type_script_lang_js_ = (articlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/article/index.vue



function article_injectStyles (context) {
  
  
}

/* normalize component */

var article_component = Object(componentNormalizer["a" /* default */])(
  pages_articlevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  article_injectStyles,
  null,
  "4f236600"
  
)

/* harmony default export */ var pages_article = __webpack_exports__["default"] = (article_component.exports);

/***/ })

};;
//# sourceMappingURL=1.js.map