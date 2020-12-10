<template>
  <main class="globalMain">
    <ul class="siteList">
      <Tag v-for="item in linkList" :key="item.id" :link ="item.link" :logo="item.logo"></Tag>
<!--      <li>-->
<!--        <a href="https://www.bilibili.com/" target="_blank">-->
<!--          <div class="site">-->
<!--            <div class="logo">Z</div>-->
<!--            <div class="link">zhihu.com</div>-->
<!--          </div>-->
<!--        </a>-->
<!--      </li>-->
      <li  @click="addTag">
        <div class="add">
          <div class="icon-wrapper">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-add"></use>
            </svg>
          </div>
          <div class="text">新增按钮</div>
        </div>
      </li>
    </ul>
  </main>
</template>

<script lang="js">
import Tag from "@/components/Tag";
import Store from "../store/recordStore.js";

export default {
name: "Main",
components:{
  Tag
},
  data(){
  return {
      linkList:Store.fetch() || [],
  }
  },

  watch:{
    linkList:{
      handler:function(link){
        Store.save(link)
      },
      deep:true
    }
  },
  methods:{

      addTag(){
        const name = window.prompt('请这样输入网址  baidu.com')
        if(name){
            this.linkList.push({
              logo:name.substr(0,1).toUpperCase(),
              link:name
            })
        }
      },

  }
}
</script>

<style lang="css" scoped>
.globalMain{
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}
.siteList{
  margin:20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
@media (min-width: 500px){
  .siteList{
    margin-left: 0;
    margin-right: -25px;
    justify-content: flex-start;
  }
}
.siteList >li{
  margin-bottom: 10px;
}
@media(min-width: 500px){
  .siteList > li {
    margin-right: 25px;
  }
}
.siteList >li :hover{
  background: #DDD;
}
.siteList .add{
  border: 1px solid #ddd;
  background: white;
  width: 150px;
  display: flex;
  flex-direction: column;
  padding:20px  0;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.siteList .add .icon-wrapper{
  width: 64px;
  height: 64px;
  display: flex;
  justify-content:center;
  align-items: center;
}

.siteList .add .text{
  margin-top:6px ;
  font-size: 14px;
}
.siteList .add .icon{
  width: 56px;
  height: 56px;
}
</style>