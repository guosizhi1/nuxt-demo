<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" v-if="user">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab == 'your_feed',
                  }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'your_feed',
                    },
                  }"
                  >Your Feed</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab == 'global_feed',
                  }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tab: 'global_feed',
                    },
                  }"
                  >Global Feed</nuxt-link
                >
              </li>
              <li class="nav-item" v-if="tag">
                <nuxt-link
                  class="nav-link"
                  :class="{
                    active: tab == 'tag',
                  }"
                  exact
                  :to="{
                    name: 'home',
                    query: {
                      tag: tag,
                    },
                  }"
                  >#{{ tag }}</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div class="article-preview" v-for="item in articles" :key="item.id">
            <div class="article-meta">
              <nuxt-link to="/"><img :src="item.author.image"/></nuxt-link>
              <div class="info">
                <a href="" class="author">{{ item.author.user }}</a>
                <span class="date">{{
                  item.createdAt | date('MMM DD YYYY')
                }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                @click="onfavorite(item)"
                :disabled="item.favoritDisable"
              >
                <i class="ion-heart"></i> {{ item.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              :to="{
                name: 'article',
                params: {
                  slug: item.slug,
                },
              }"
              class="preview-link"
            >
              <h1>{{ item.title }}</h1>
              <p>{{ item.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>

        <nav>
          <ul class="pagination">
            <li
              class="page-item ng-scope"
              v-for="total in totalPage"
              :class="{
                active: total == page,
              }"
              :key="total"
            >
              <nuxt-link
                class="page-link ng-binding"
                :to="{
                  name: 'home',
                  query: {
                    page: total,
                    tag: $route.query.tag,
                    tab: tab,
                  },
                }"
                >{{ total }}</nuxt-link
              >
            </li>
          </ul>
        </nav>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>
            <div class="tag-list" v-for="tag in tags" :key="tag">
              <nuxt-link
                class="tag-pill tag-default"
                :to="{
                  name: 'home',
                  query: {
                    tag: tag,
                    tab: 'tag',
                  },
                }"
                >{{ tag }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getList,
  getTags,
  getYourFeed,
  addfavorite,
  delfavorite,
} from '@/api/article'
import { mapState } from 'vuex'
export default {
  name: 'homeIndex',
  async asyncData({ query, store }) {
    const page = Number(query.page || 1)
    const limit = 20
    const tab = query.tab || 'global_feed'
    const { tag } = query
    const loadArt =
      store.state.user && tab == 'your_feed' ? getYourFeed : getList
    const [art, tagData] = await Promise.all([
      loadArt({
        limit: limit,
        offset: (page - 1) * limit,
        tag,
      }),
      getTags(),
    ])
    const { articles, articlesCount } = art.data
    articles.forEach((item) => {
      item.favoritDisable = false
    })
    const { tags } = tagData.data
    return {
      articlesCount,
      articles,
      limit,
      page,
      tags,
      tag,
      tab,
    }
  },
  watchQuery: ['page', 'tag', 'tab'],
  computed: {
    ...mapState(['user']),
    totalPage() {
      return Math.ceil(this.articlesCount / this.limit)
    },
  },
  methods: {
    async onfavorite(item) {
      item.favoritDisable = true
      if (item.favorited) {
        //取消点赞
        await delfavorite(item.slug)
        item.favorited = false
        item.favoritesCount += -1
      } else {
        //点赞
        await addfavorite(item.slug)
        item.favorited = true
        item.favoritesCount += 1
      }
      item.favoritDisable = false
    },
  },
}
</script>

<style></style>
