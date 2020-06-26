<template>
    <div class="box">
      <slot>
        <img :src="imgSrc"/>
      </slot>
      <input type="text" v-model="inf">
    </div>
</template>

<script>
    export default {
        name: "talented2",
        data() {
          return {
            inf: "青年路",
            imgSrc: require("../../assets/img/talented/11.png")
          }
        }
    }
</script>

<style lang="less" scoped>
  .box {
    margin-top: 50px;
    padding-left: 50px;
    position: relative;
    img {
      position: absolute;
      top: 5px;
      left: 58px;
    }
    input {
      width: 300px;
      height: 40px;
      border-radius: 3px;
      padding-left: 50px;
    }
  }
</style>
