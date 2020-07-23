<template>
    <div class="cart-box">
        <h1>商品列表</h1>
        <commodity
            :info="commodity"
            @getId="addToCart"
        />
        <h1 class="cart">购物车</h1>
        <card
            :info="list"
            @getId="addToCart"
            @delId="delToCart"
        />
        <div class="total">总价：{{total}}元</div>
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
        },
        computed: {
            list () {
                return this.cartList.map((item, index) => {
                    const listItem = this.commodity.find(prditem => {
                        return  item.id === prditem.id
                    })
                    return {
                        ...listItem,
                        num: item.num
                    }
                })
            },
            total () {
                return this.list.reduce((x, y) => {
                    return x + y.num*y.price
                }, 0)
            }
        },
        methods: {
            addToCart(id) {
                const isIdItem = this.cartList.find(item => {
                    return item.id === id;
                })
                if(isIdItem) {
                    isIdItem.num ++
                } else {
                    this.cartList.push({
                        id: id,
                        num: 1
                    })
                }
            },
            delToCart(id) {
                const res = this.cartList.find(item => {
                    return item.id === id
                })
                res.num --;
                if(res.num <= 0) {
                    this.cartList = this.cartList.filter((item, index) => {
                        return item.id !== id;
                    })
                }
            }
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
        .total {
            margin-top: 10px;
        }
    }
</style>
