<template>
  <div class="settings-page">
    <div class="container page" v-if="user">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control"
                  type="text"
                  v-model="user.image"
                  placeholder="URL of profile picture"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                   v-model="user.username"
                  placeholder="Your Name"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="8"
                  placeholder="Short bio about you"
                  v-model="user.bio"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="text"
                  placeholder="Email"
                  v-model="user.email"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  class="form-control form-control-lg"
                  type="password"
                  placeholder="Password"
                  v-model="user.password"
                />
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right" :disabled="dis">
                Update Settings
              </button>
            </fieldset>
          </form>
          <hr>
          <button class="btn btn-outline-danger" @click="logout">
          Or click here to logout.
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { setUser,getUser } from "@/api/user"
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'auth',
  name: 'settingIndex',
  data(){
    return{
      dis:false,
      user:null
    }
  },
  async created(){
      const {data}=await getUser();
      this.user=data.user;
      console.log(data.user)
  },
  methods:{
    async onSubmit(){
        this.dis=true;
        const {data} =await setUser({
          user:this.user
        });
        this.$store.commit("setUser",data.user)
        Cookie.set('user', data.user)
        this.$router.go(-1)
        this.dis=true;
    },
    logout(){
       this.$store.commit("setUser",""),
       Cookie.remove('user')
       this.$router.push("/")
    }
  
  }
}
</script>

<style></style>
