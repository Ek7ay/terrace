<template>
    <div>
        <h1>商品列表</h1>
        <productList :info="item" v-for="(item, index) in productList" :key="item.id"/>
        <h1 class="shop">购物车</h1>
        <shoppingCard :info="item" v-for="(item, index) in list" :key="item.id"/>
    </div>
</template>

<script>
    import productList from "./productList";
    import shoppingCard from "./shoppingCard";

    export default {
        data () {
          return {
            productList: [{
              id: "1",
              info: "商品1",
              price: 10
            },{
              id: "2",
              info: "商品2",
              price: 15
            },{
              id: "3",
              info: "商品3",
              price: 20
            },{
              id: "4",
              info: "商品4",
              price: 25
            }],

            shoppingCard: [{
              id: "1",
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
          }
        }
    }
</script>

<style lang="less" scoped>
  .shop {
    position: absolute;
    top: 180px;
  }
</style>
