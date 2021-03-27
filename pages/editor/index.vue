<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form  >
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                  v-model="article.title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                  v-model="article.description "
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="article.body"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  v-model="tagText"
                  @keyup.enter="onkeyup"
                />
                <div class="tag-list" v-for="(item,index) in article.tagList" :key="index">
                  <span @click="delTag(index)" class="tag-default tag-pill ng-binding ng-scope">
                  <i class="ion-close-round"></i>
                  {{item}}
                </span>
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"

                @click="onSubmit"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { addArticles } from "@/api/article"
export default {
  middleware: 'auth',
  name: 'editorinedx',
  data(){
    return{
      article :{
        title :"",
        description :"",
        body :"",
        tagList :[]
      },
      tagText:""
    }
  },
  methods:{
    onkeyup(){
      console.log(this.tagText)
      this.article.tagList.push(this.tagText);
      this.tagText="";
    },
    delTag(index){
      this.article.tagList.splice(index,1)
    },
    async onSubmit(){
      console.log(123)
      const data=await addArticles({
        article :this.article 
      })
      this.$router.push("/")
    }
  }
}
</script>

<style></style>
