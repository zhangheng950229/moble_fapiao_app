<template lang="html">
  <article>
    <section class="history">
      <header>
        <h2>可开票金额（元）</h2>
        <p class="cash">{{cash}}</p>
        <ul>
          <li v-for="nape in sum">
            <p>{{nape.word}}</p>
            <p>{{nape.cash}}</p>
          </li>
        </ul>
      </header>
      <ul class="record">
        <li v-for="nape in record">
          <div class="title">
            <span>{{nape.title}}</span>
            <span>{{nape.money}}元</span>
          </div>
          <div class="content">
            <div>
              <p v-if="nape.status_1==0">待审核</p>
              <p v-else-if="nape.status_1==1">已审核   已开具</p>
              <p v-else-if="nape.status_1==2">已驳回</p>
              <p>{{nape.date}}</p>
            </div>
            <div>
              <button v-if="!nape.status_2" type="button" status="uncompleted">配送中</button>
              <button v-else type="button" status="completed">配送完成</button>
            </div>
          </div>
        </li>
      </ul>
    </section>
    <component :is="nva"></component>
  </article>
</template>

<script>
import Nva from "../components/navigation.vue";

export default {
  data () {
    return {
      nva: Nva,
      cash: "",
      sum: [],
      record: []
    }
  },
  mounted: function () {

    //定义容器高度
    let h1 = screen.height;
    let h2 = document.getElementsByTagName("nav")[0].offsetHeight;
    let h3 = document.getElementsByTagName("header")[0].offsetHeight;

    document.getElementsByClassName("history")[0].style.height = h1 - h2 +'px';
    document.getElementsByClassName("record")[0].style.height = h1 - h2 -h3 +'px';

    //开票金额
    axios.get('/sum').then(function (res) {
      this.sum = res.data.sum;
      this.cash = res.data.cash;
    }.bind(this)).catch(function (err) {
      console.log(err);
    });

    //历史记录
    axios.get('/record').then(function (res) {
      this.record = res.data;
    }.bind(this)).catch(function (err) {
      console.log(err);
    });
  }
}
</script>

<style lang="scss" scoped>
@import "../../css/sass.scss";

.history {
  box-sizing: border-box;
  header {
    background: url(../../images/history-background.png) no-repeat;
    background-size: 100% 100%;
    padding: 2rem $padding 0.85rem $padding;
    color: #fff;
    h2 {
      background: url(../../images/cash.png) no-repeat;
      background-size: 0.775rem 0.75rem;
      font-size: 0.6rem;
      height: 0.75rem;
      padding-top: 0.09rem;
      box-sizing: border-box;
      text-indent: 1.005rem;
    }
    .cash {
      border-bottom: 1px solid #fba990;
      margin-top: 0.625rem;
      font-size: 1.25rem;
      padding-bottom: 0.9rem;
    }
    ul {
      padding-top: 1.075rem;
      display: flex;
      li {
        flex: 1px;
        p{
          color: #fff;
          &:nth-child(1) {
            font-size: 0.6rem;
            opacity: 0.8;
          }
          &:nth-child(2) {
            padding-top: 0.75rem;
            font-size: 0.95rem;
          }
        }
      }
    }
  }
  .record {
    overflow-y: auto;
    li {
      background-color: #ffffff;
      border-bottom: 1px solid $borderColor;
      padding: 1rem $padding;
      .title {
        font-size: 0.8rem;
        color: #333333;
        span {
          &:nth-child(1) {
            float: left;
          }
          &:nth-child(2) {
            float: right;
          }
        }
        &:after {
          @include clear();
        }
      }
      .content {
        div:nth-child(1) {
          float: left;
          p:nth-child(1) {
            margin-top: 0.5rem;
            font-size: 0.65rem;
            color: $red;
          }
          p:nth-child(2) {
            margin-top: 0.5rem;
            font-size: 0.6rem;
            color: $color1;
          }
        }
        div:nth-child(2) {
          button {
            float: right;
            border: 1px solid $red;
            margin-top: 0.5rem;
            width: 3.75rem;
            height: 1.5rem;
            text-align: center;
            color: $red;
            font-size: 0.7rem;
            &[status=completed] {
              background-color: #fff;
              color: $red;
            }
            &[status=uncompleted] {
              background-color: $red;
              color: #fff;
            }
          }
        }
        &:after {
          @include clear();
        }
      }
    }
  }
}
</style>
