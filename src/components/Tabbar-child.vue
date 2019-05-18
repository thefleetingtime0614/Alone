<template>
  <div class="position">
    <div class="tabbar-child">
      <section>
        <slot></slot>
      </section>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    .position{
      margin-bottom:110px;
    }
    .tabbar-child{
      width:100%;
      height:50px;
      background:white;
      border-bottom:1px solid #ececec;
      position:fixed;
      top:60px;
      box-sizing:border-box;
    }
    section{
      width:960px;
      margin:0 auto;
    }
</style>
