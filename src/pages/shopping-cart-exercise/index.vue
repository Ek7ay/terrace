<template>
    <div class="cart-box">
        <h1>商品列表</h1>
        <commodity :info="commodity"/>
        <h1 class="cart">购物车</h1>
        <card />
    </div>
</template>

<script>
    import commodity from "./commodity";
    import card from "./card";
    export default {
        data () {
          return {
              commodity: [
              {
                  id: "01",
                  name: "洗发水",
                  price: 30
              },{
                  id: "02",
                  name: "沐浴露",
                  price: 50
              },{
                  id: "03",
                  name: "毛巾",
                  price: 10
              },{
                  id: "04",
                  name: "搓澡巾",
                  price: 20
              },],
              cartList: [{
                  id: "01",
                  num: 1
              }]
            }
        },
        components: {
            commodity,
            card
        }
    }
</script>

<style lang="less" scoped>
    .cart-box {
        padding: 100px 0 0 100px;
        h1 {
            font-size: 20px;
            color: #8b0cce;
        }
        .cart {
            margin-top: 50px;
        }
    }
</style>
