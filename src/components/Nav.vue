<template>
    <div class="nav">
      <Search/>
      <Main/>
    </div>

</template>

<script lang="js">
import Search from "@/components/Search";
import Main from "@/components/Main";

export default {
name: "Nav",
  components:{
  Search,
    Main
  }
}
</script>

<style scoped>





</style>