<template>
    <div>
      <span>{{info.info}}----{{info.price}}元</span><a @click="clickHandler" href="javascript:; ">加入购物车</a>
    </div>
</template>

<script>
    export default {
        props: {
          info: {}
        },
        methods: {
          clickHandler () {
            // 向父组件传值
            this.$emit("getId", this.info.id)
          }
        }
    }
</script>

<style lang="less" scoped>
a {
  margin-left: 20px;
}
</style>
