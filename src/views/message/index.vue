<template lang="html">
  <article>
    <section class="message">
      <ul class="records" v-if="hasRecord">
        <li v-for="n in records">
          <div class="line-1">
            <p class="left">{{n.company}}</p>
            <p class="right">
              <span>{{n.expenses}}元</span>
              <span>{{n.expensesType}}</span>
            </p>
          </div>
          <div class="line-2">
            <span>{{n.time[0]}}</span>
            <span>{{n.time[1]}}</span>
          </div>
        </li>
      </ul>
      <div class="none" v-else>
        <div class="logo"></div>
        <h2>{{none}}</h2>
      </div>
    </section>
    <component :is="nva"></component>
  </article>
</template>

<script>
import Nva from "../components/navigation.vue";

export default {
  mounted: function () {
    let h1 = screen.height;
    let h2 = document.getElementsByTagName("nav")[0].offsetHeight;
    document.getElementsByClassName("message")[0].style.height = h1 - h2 +'px';

    axios.get('/m_record').then(function (res) {
      this.records = res.data;
    }.bind(this)).catch(function (err) {
      console.log(err);
    });
  },
  computed: {
    hasRecord: function () {
      if (this.records.length > 0) {
        return true;
      }
      else {
        return false;
      }
    }
  },
  data () {
    return {
      nva: Nva,
      records: [],
      none: "暂无申请记录",
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/sass.scss";

.message {
  box-sizing: border-box;
}
.records {
  li {
    position: relative;
    background-color: #fff;
    border-bottom: 1px solid $borderColor;
    box-sizing: border-box;
    padding: $padding;
    .line-1 {
      margin-bottom: 0.3rem;
      font-size: 0.7rem;
      .left {
        float: left;
        color: #333333;
      }
      .right {
        margin-right: 1rem;
        float: right;
        span {
          &:nth-child(1) {
            color: #333;
          }
          &:nth-child(2) {
            color: $red;
          }
        }
      }
      &:after {
        @include clear;
      }
    }
    .line-2 {
      color: #aaaaaa;
      font-size: 0.5rem;
      line-height: 0.6rem;
    }
    &:after {
      position: absolute;
      top: 1.325rem;
      right: 0.75rem;
      content: "";
      @include delta;
    }
  }
}
.none {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;
  .logo {
    background: url(../../images/notfound.png) no-repeat;
    background-size: 100% 100%;
    margin-bottom: 1.25rem;
    width: 7.7rem;
    height: 7.1rem;
  }
  h2 {
    color: #aaaaaa;
    font-size: 0.7rem;
  }
}
</style>
