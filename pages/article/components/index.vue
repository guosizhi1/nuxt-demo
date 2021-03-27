<template>
  <div class="article-meta">
    <a href=""><img :src="article.author.image" /></a>
    <div class="info">
      <a href="" class="author">{{ article.author.username }}</a>
      <span class="date">{{ article.createdAt | date("MMM DD YYYY") }}</span>
    </div>
    <button class="btn btn-sm btn-outline-secondary">
      <i class="ion-plus-round"></i>
      &nbsp; Follow Eric Simons <span class="counter">(10)</span>
    </button>
    &nbsp;&nbsp;
    <button
      class="btn btn-sm btn-primary"
      :class="{
        'btn-outline-primary': article.favorited,
      }"
      @click="onfavorite(article)"
    >
      <i class="ion-heart"></i>
      &nbsp; Favorite Post
      <span class="counter">({{ article.favoritesCount }})</span>
    </button>
  </div>
</template>

<script>
import { addfavorite, delfavorite } from "@/api/article";
export default {
  name: "favorite",
  props: {
    article: {
      type: Object,
      require: true,
    },
  },
  methods: {
    async onfavorite(item) {
      item.favoritDisable = true;
      if (item.favorited) {
        //取消点赞
        await delfavorite(item.slug);
        item.favorited = false;
        item.favoritesCount += -1;
      } else {
        //点赞
        await addfavorite(item.slug);
        item.favorited = true;
        item.favoritesCount += 1;
      }
      item.favoritDisable = false;
    },
  },
};
</script>

<style>
</style>