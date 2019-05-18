<template>
  <div>
    <TabbarChild>活动插槽</TabbarChild>
    <router-view class="events"></router-view>
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
  .events{
    width:960px;
    margin:0 auto
  }
</style>