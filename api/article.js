import { request } from "@/plugins/request.js"
//文章列表
export const getList = data => {
  return request({
    method: "GET",
    url: "/api/articles",
    data
  })
}
//  获取标签
export const getTags = () => {
  return request({
    method: "GET",
    url: "/api/tags",
  })
}
//获取点赞文章
export const getYourFeed = data => {
  return request({
    method: "GET",
    url: "/api/articles/feed",
  })
}
// 点赞
export const addfavorite = slug => {
  return request({
    method: "POST",
    url: `/api/articles/${slug}/favorite`,
  })
}
// 取消点赞
export const delfavorite = slug => {
  return request({
    method: "DELETE",
    url: `/api/articles/${slug}/favorite`,
  })
}
// 文章详情

export const articlesDetails = slug => {
  return request({
    method: "GET",
    url: `/api/articles/${slug}`,
  })
}
//添加文章
export const addArticles = data => {
  return request({
    method: "POST",
    url: '/api/articles',
    data
  })
}