<template>
    <div class="shoppingCard">
      <span>{{info.info}}(数量{{info.num}})</span><a href="javascript:;">增加</a><a href="javascript:;">减少</a>
    </div>
</template>

<script>
    export default {
        props: {
          info: {

          }
        }
    }
</script>

<style lang="less" scoped>
a {
  margin-left: 20px;
}
.shoppingCard {
  position: absolute;
  top: 200px;
}
</style>
