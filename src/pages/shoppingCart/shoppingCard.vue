<template>
    <div>
      <span>{{info.info}}(数量{{info.num}})</span>
      <a @click="add" href="javascript:;">增加</a>
      <a @click="del" href="javascript:;">减少</a>
    </div>
</template>

<script>
    export default {
        props: {
          info: {}
        },
        methods: {
          add () {
            this.$emit("addNum", this.info.id)
          },
          del () {
            this.$emit("delNum", this.info.id)
          }
        }
    }
</script>

<style lang="less" scoped>
a {
  margin-left: 20px;
}
</style>
