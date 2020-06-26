<template>
    <div class="box"><img src="../../assets/img/talented/11.png"/>
      <img :src="src"/>
      <input type="text" v-model="info">
    </div>
</template>

<script>
    export default {
        name: "talent",
        props: {
          status: ""
        },
        data () {
          return {
            info: "青年",
            imgSrc: ""
          }
        },
        computed: {
          src: function () {
             switch (this.status) {
              case 1:
                return  require("../../assets/img/talented/11.png");
                break;
              case 2:
                return  require("../../assets/img/talented/12.png");
                break;
              case 3:
                return require("../../assets/img/talented/15.png");
                break;
              case 4:
                return require("../../assets/img/talented/16.png");
                break;
              case 5:
                return require("../../assets/img/talented/17.png");
                break;
              default:
                return require("../../assets/img/talented/11.png");
                break;
            }
          }
        },
        // watch: {
        //   status: function(val) {
        //     switch (val) {
        //       case 1:
        //         this.imgSrc = require("../../assets/img/talented/11.png");
        //         break;
        //       case 2:
        //         this.imgSrc = require("../../assets/img/talented/12.png");
        //         break;
        //       case 3:
        //         this.imgSrc = require("../../assets/img/talented/15.png");
        //         break;
        //       case 4:
        //         this.imgSrc = require("../../assets/img/talented/16.png");
        //         break;
        //       case 5:
        //         this.imgSrc = require("../../assets/img/talented/17.png");
        //         break;
        //       default:
        //         this.imgSrc = require("../../assets/img/talented/11.png");
        //         break;
        //     }
        //   }
        // },
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
