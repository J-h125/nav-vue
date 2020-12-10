<template>
  <header class="globalHeader">
    <form
        class="searchForm"
        method="GET"
        action="https://www.baidu.com/s"
        target="_blank"
    >
      <input name="wd" type="text" />
      <button type="submit">搜索</button>
    </form>
  </header>
</template>

<script lang="ts">
export default {
name: "Search"
}
</script>

<style lang="css" scoped>
.globalHeader{
  margin: 20px;
}
@media (min-width: 500px) {
  .globalHeader {
    margin:200px;
  }
}
.searchForm{
  display: flex;
  justify-content: space-between;
}
@media (min-width: 500px) {
  .searchForm {
    max-width: 400px;
    margin: 0 auto;
  }
}
.searchForm > input{
  border: 1px solid #DDD;
  width: 100%;
  height: 40px;
  margin-right:10px ;
  border-radius: 4px;
  padding:10px;

}
.searchForm > button{
  padding:0 20px;
  white-space: nowrap;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  font-size: 16px;
  background: #1091DA;
  color: #FFFFFF;
}
</style>