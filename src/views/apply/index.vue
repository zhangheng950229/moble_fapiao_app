<template lang="html">
  <article class="">
    <section class="apply">
      <header></header>
      <ul>
        <li>
          <span>增值税普通发票申请</span>
          <em></em>
        </li>
        <li>
          <span>增值税专用发票申请</span>
          <em></em>
        </li>
      </ul>
    </section>
    <component :is="nva"></component>
  </article>
</template>

<script>
import Nva from "../components/navigation.vue";

export default {
  mounted: () => {
    let h1 = screen.height;
    let h2 = document.getElementsByTagName("nav")[0].offsetHeight;
    document.getElementsByClassName("apply")[0].style.height = h1 - h2 +'px';
  },
  data () {
    return {
        nva: Nva
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/sass.scss";
.apply {
  box-sizing: border-box;
}
header {
  height: 9.75rem;
  background: url(../../images/applyHead.png) no-repeat;
  background-size: 100% 100%;
}
ul {
  padding: 0 $padding;
  li {
    margin: 0.5rem 0;
    background: #FFFFFF;
    span {
      float: left;
      font-size: 0.8rem;
      color: #000000;
      line-height: 4.25rem;
      text-indent: 1.5rem;
    }
    em {
      float: right;
      margin: 1.95rem $padding 0 0;
      @include delta;
    }
    &:nth-child(1) {
      &:before {
        float: left;
        background: url(../../images/receipt-1.png) no-repeat;
        background-size: 100% 100%;
        content: "";
        display: inline-block;
        margin: 0.75rem 0 0 1.25rem;
        width: 2.3rem;
        height: 2.675rem;
      }
    }
    &:nth-child(2) {
      &:before {
        float: left;
        background: url(../../images/receipt-2.png) no-repeat;
        background-size: 100% 100%;
        content: "";
        display: inline-block;
        margin: 0.75rem 0 0 1.25rem;
        width: 2.3rem;
        height: 2.675rem;
      }
    }
    &:after {
      @include clear;
    }
  }
}
</style>
