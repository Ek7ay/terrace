<template>
    <div>
        <h1>商品列表</h1>
        <productList
          :info="item"
          v-for="(item, index) in productList"
          @getId="addToCard"
          :key="item.id"
        />
        <h1 class="shop">购物车</h1>
        <div class="shoppingCard">
          <shoppingCard
            :info="item"
            v-for="(item, index) in list"
            @addNum="addToCard"
            @delNum="deleteToCard"
            :key="item.id"
          />
          <p>总价{{total}}元</p>
        </div>
    </div>
</template>

<script>
    import productList from "./productList";
    import shoppingCard from "./shoppingCard";

    export default {
        data () {
          return {
            productList: [{
              id: "01",
              info: "牙刷",
              price: 10
            },{
              id: "02",
              info: "牙膏",
              price: 15
            },{
              id: "03",
              info: "杯子",
              price: 20
            },{
              id: "04",
              info: "发蜡",
              price: 25
            }],

            shoppingCard: [{
              id: "01",
              num: 1
            }]
          }
        },
        components: {
          productList,
          shoppingCard
        },
        computed: {
          list () {
            return this.shoppingCard.map((item, index) => {
              const listItem = this.productList.find(
                prdItem => prdItem.id === item.id
              );
              return  {
                ...listItem,
                num: item.num
              }
            })
          },
          total() {
            return this.list.reduce((x, y) => x + y.num*y.price, 0)
          }
        },
        methods: {
          addToCard(id) {
            console.log(id);
            const res = this.shoppingCard.find(item => id === item.id);
            if (res) {
              res.num++;
              return;
            }

            this.shoppingCard.push({
              id,
              num: 1
            })
          },
          deleteToCard(id) {
            console.log(id);
            const res = this.shoppingCard.find(item => id === item.id);
            res.num--;
            if (res.num <= 0) {
              this.shoppingCard = this.shoppingCard.filter((item, index) => {
                return item.id !== id;
              })
            }
          }
        }
    }
</script>

<style lang="less" scoped>
  .shop {
    position: absolute;
    top: 180px;
  }
  .shoppingCard {
    position: absolute;
    top: 200px;
  }
  p {
    margin-top: 10px;
  }
</style>
