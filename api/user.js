import {request} from "@/plugins/request"
  //登录
 export const login=data=>{
    return request({
      method:"POST",
      url:"/api/users/login",
      data
    })
 }
//  注册
 export const register=data=>{
  return request({
    method:"POST",
    url:"/api/users",
    data
  })
}
//获取用户数据
export const getUser=()=>{
  return request({
    method:"GET",
    url:"/api/user",
  })
}
// 修改个人中心
export const setUser=data=>{
  return request({
    method:"PUT",
    url:"/api/user",
    data
  })
}