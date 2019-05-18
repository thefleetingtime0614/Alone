<template>
  <div>
    <Live2d></Live2d>
    <Tabbar></Tabbar>
    <section class="indent">
      <router-view/>
    </section>
  </div>
</template>

<script>
  import Live2d from '@/components/Live2d'
  import Tabbar from './components/Tabbar.vue'
  export default {
    components:{
      Tabbar,
      Live2d
    }
  }
</script>

<style lang="scss">
  html{
    background:#f1f1f1
  }
  *{
    margin:0;
    padding:0;
  }
  ul{
    list-style:none;
  }
  a{
    text-decoration: none;
  }
  .indent{
    margin-top:60px;
  }
</style>
