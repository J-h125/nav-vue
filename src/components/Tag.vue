<template>
  <li v-if="hide">
    <a :href="'https:\/\/www.' + link " target="_blank">
      <div class="site">
        <div class="logo">{{logo}}</div>
        <div class="link">{{link}}</div>
        <div @click.prevent="remove" class="close">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-close"></use>
          </svg>
        </div>
      </div>
    </a>
  </li>
</template>

<script >
import Store from "../store/recordStore.js";
export default {
  name: "Tag",
  props:{
    logo:String,
    link:String,
  },
  data(){
    return{
    hide:true
    }
  },
  methods:{
    remove(){
     let reArray = []
      let tags = Store.fetch()
        for(let key in tags){
          if(tags[key].logo.toString() === this.logo){
            continue;
          }
          reArray.push(tags[key])
        }
      Store.save(reArray)
      window.location.reload()
       // this.hide = !this.hide;
    }
  }

}
</script>

<style  scoped>
 .site{
  border: 1px solid #ddd;
  background: white;
  width: 150px;
  display: flex;
  flex-direction: column;
  padding:20px  0;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
   position: relative;

}
 li :hover{
   background: #DDDDDD;
 }
.logo{
  height: 64px;
  width: 64px;
  font-size: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
}
 .link{
  margin-top:6px ;
  font-size: 14px;
}
 .close{
   position: absolute;
   right: 1px;
   top:   1px;
 }
 .close   :hover{
   transform: rotate(270deg);
   transition: all 1s;
 }

 .close .icon{
   width: 20px;
   height: 20px;
 }
</style>