<template>
  <div class="tabbar">
    <section>
      <img src="../../public/images/logo.a7995ad.svg" alt="" @click="handleClick">
      <div class="navbar">
        <router-link activeClass="active" to="/home" tag="div">首页</router-link>
        <router-link activeClass="active" to="/pins" tag="div">沸点</router-link>
        <router-link activeClass="active" to="/topics" tag="div">话题</router-link>
        <router-link activeClass="active" to="/books" tag="div">小册</router-link>
        <router-link activeClass="active" to="/events" tag="div">活动</router-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    methods:{
      handleClick(){
        this.$router.push("/home")
      }
    }
  }
</script>

<style scoped>
  .active{
    color:#007fff;
  }
  .tabbar{
    width:100%;
    height:60px;
    background:white;
    border-bottom:#ececec 1px solid;
    position:fixed;
    box-sizing:border-box;
    top:0;
  }
  section{
    width:960px;
    margin:0 auto;
    display:flex;
  }
  .navbar{
    margin-left:30px;
    display:flex;
  }
  section img{
    cursor:pointer;
  }
  .navbar div{
    width:70px;
    line-height:60px;
    text-align:center;
    cursor:pointer;
  }
  .navbar div:hover{
    color:#007fff
  }
</style>
