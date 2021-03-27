exports.ids = [3];
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

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=template&id=a4bae59a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home-page"},[_vm._ssrNode("<div class=\"banner\"><div class=\"container\"><h1 class=\"logo-font\">conduit</h1> <p>A place to share your knowledge.</p></div></div> "),_vm._ssrNode("<div class=\"container page\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-md-9\">","</div>",[_vm._ssrNode("<div class=\"feed-toggle\">","</div>",[_vm._ssrNode("<ul class=\"nav nav-pills outline-active\">","</ul>",[(_vm.user)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab == 'your_feed',
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'your_feed',
                  },
                }}},[_vm._v("Your Feed")])],1):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab == 'global_feed',
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tab: 'global_feed',
                  },
                }}},[_vm._v("Global Feed")])],1),_vm._ssrNode(" "),(_vm.tag)?_vm._ssrNode("<li class=\"nav-item\">","</li>",[_c('nuxt-link',{staticClass:"nav-link",class:{
                  active: _vm.tab == 'tag',
                },attrs:{"exact":"","to":{
                  name: 'home',
                  query: {
                    tag: _vm.tag,
                  },
                }}},[_vm._v("#"+_vm._s(_vm.tag))])],1):_vm._e()],2)]),_vm._ssrNode(" "),_vm._l((_vm.articles),function(item){return _vm._ssrNode("<div class=\"article-preview\">","</div>",[_vm._ssrNode("<div class=\"article-meta\">","</div>",[_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{attrs:{"src":item.author.image}})]),_vm._ssrNode(" <div class=\"info\"><a href class=\"author\">"+_vm._ssrEscape(_vm._s(item.author.user))+"</a> <span class=\"date\">"+_vm._ssrEscape(_vm._s(_vm._f("date")(item.createdAt,'MMM DD YYYY')))+"</span></div> <button"+(_vm._ssrAttr("disabled",item.favoritDisable))+" class=\"btn btn-outline-primary btn-sm pull-xs-right\"><i class=\"ion-heart\"></i>"+_vm._ssrEscape(" "+_vm._s(item.favoritesCount)+"\n            ")+"</button>")],2),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"preview-link",attrs:{"to":{
              name: 'article',
              params: {
                slug: item.slug,
              },
            }}},[_c('h1',[_vm._v(_vm._s(item.title))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(item.description))]),_vm._v(" "),_c('span',[_vm._v("Read more...")])])],2)})],2),_vm._ssrNode(" "),_vm._ssrNode("<nav>","</nav>",[_vm._ssrNode("<ul class=\"pagination\">","</ul>",_vm._l((_vm.totalPage),function(total){return _vm._ssrNode("<li"+(_vm._ssrClass("page-item ng-scope",{
              active: total == _vm.page,
            }))+">","</li>",[_c('nuxt-link',{staticClass:"page-link ng-binding",attrs:{"to":{
                name: 'home',
                query: {
                  page: total,
                  tag: _vm.$route.query.tag,
                  tab: _vm.tab,
                },
              }}},[_vm._v(_vm._s(total))])],1)}),0)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-md-3\">","</div>",[_vm._ssrNode("<div class=\"sidebar\">","</div>",[_vm._ssrNode("<p>Popular Tags</p> "),_vm._l((_vm.tags),function(tag){return _vm._ssrNode("<div class=\"tag-list\">","</div>",[_c('nuxt-link',{staticClass:"tag-pill tag-default",attrs:{"to":{
                name: 'home',
                query: {
                  tag: tag,
                  tab: 'tag',
                },
              }}},[_vm._v(_vm._s(tag))])],1)})],2)])],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=template&id=a4bae59a&

// EXTERNAL MODULE: ./api/article.js
var article = __webpack_require__(26);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/home/index.vue?vue&type=script&lang=js&
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


/* harmony default export */ var homevue_type_script_lang_js_ = ({
  name: 'homeIndex',

  async asyncData({
    query,
    store
  }) {
    const page = Number(query.page || 1);
    const limit = 20;
    const tab = query.tab || 'global_feed';
    const {
      tag
    } = query;
    const loadArt = store.state.user && tab == 'your_feed' ? article["g" /* getYourFeed */] : article["e" /* getList */];
    const [art, tagData] = await Promise.all([loadArt({
      limit: limit,
      offset: (page - 1) * limit,
      tag
    }), Object(article["f" /* getTags */])()]);
    const {
      articles,
      articlesCount
    } = art.data;
    articles.forEach(item => {
      item.favoritDisable = false;
    });
    const {
      tags
    } = tagData.data;
    return {
      articlesCount,
      articles,
      limit,
      page,
      tags,
      tag,
      tab
    };
  },

  watchQuery: ['page', 'tag', 'tab'],
  computed: { ...Object(external_vuex_["mapState"])(['user']),

    totalPage() {
      return Math.ceil(this.articlesCount / this.limit);
    }

  },
  methods: {
    async onfavorite(item) {
      item.favoritDisable = true;

      if (item.favorited) {
        //取消点赞
        await Object(article["d" /* delfavorite */])(item.slug);
        item.favorited = false;
        item.favoritesCount += -1;
      } else {
        //点赞
        await Object(article["b" /* addfavorite */])(item.slug);
        item.favorited = true;
        item.favoritesCount += 1;
      }

      item.favoritDisable = false;
    }

  }
});
// CONCATENATED MODULE: ./pages/home/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_homevue_type_script_lang_js_ = (homevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/home/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_homevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6444ab9e"
  
)

/* harmony default export */ var home = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=3.js.map