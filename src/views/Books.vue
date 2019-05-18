<template>
  <div>
      <TabbarChild>小册插槽</TabbarChild>
      <router-view class="books"></router-view>
  </div>
</template>

<script>
import TabbarChild from '../components/Tabbar-child'
export default {
  components:{
    TabbarChild
  }
}
</script>

<style scoped>
  .books{
    width:960px;
    margin:0 auto
  }
</style>