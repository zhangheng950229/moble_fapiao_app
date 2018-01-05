<template lang="html">
  <nav>
    <router-link v-for="nape in nav" v-bind:to="nape.path">{{nape.value}}</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          path: "/apply",
          value: "开票申请"
        },
        {
          path: "/history",
          value: "申请历史"
        },
        {
          path: "/message",
          value: "开票信息"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/sass.scss";

nav {
  border-top: 1px solid #e3e3e3;
  background-color: #fff;
  padding: 0 $padding;
  display: flex;
  height: 2.625rem;
   a {
    display: flex;
    flex: 1;
    font-size: 0.5rem;
    color: #afafaf;
    flex-direction: column;
    align-items: center;
    &:nth-child(1):before {
      display: block;
      content: "";
      margin: 0.4rem 0 0.45rem 0;
      width: 0.95rem;
      height: 0.95rem;
      background: url(../../images/icon-1.png) no-repeat;
      background-size: 100% 100%;
    }
    &:nth-child(2):before {
      display: block;
      content: "";
      margin: 0.4rem 0 0.45rem 0;
      width: 0.95rem;
      height: 0.95rem;
      background: url(../../images/icon-2.png) no-repeat;
      background-size: 100% 100%;
    }
    &:nth-child(3):before {
      display: block;
      content: "";
      margin: 0.4rem 0 0.45rem 0;
      width: 0.95rem;
      height: 0.95rem;
      background: url(../../images/icon-3.png) no-repeat;
      background-size: 100% 100%;
    }
  }
  .router-link-active{
    &:nth-child(1):before {
      background: url(../../images/icon-1-active.png) no-repeat;
      background-size: 100% 100%;
    }
    &:nth-child(2):before {
      background: url(../../images/icon-2-acitve.png) no-repeat;
      background-size: 100% 100%;
    }
    &:nth-child(3):before {
      background: url(../../images/icon-3-active.png) no-repeat;
      background-size: 100% 100%;
    }
  }
}

</style>
