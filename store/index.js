//服务端运行的都是同一实例
//防止数据冲突
const cookieparser = process.server?require("cookieparser"):undefined

export const state = ()=>{
  return{
    user:null
  }
}
export const mutations={
  setUser(state,data){
    state.user=data;
  }
}
export const actions={
  //特殊的
  //在服务端渲染自动调用
  nuxtServerInit({commit},{req}){
    let user=null;
    if(req.headers.cookie){
      const parsed=cookieparser.parse(req.headers.cookie)
      try{
        user=JSON.parse(parsed.user)
      }catch(err){

      }
    }
    commit("setUser",user)
  }
} 