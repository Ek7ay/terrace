<template>
  <div>
    <talented2>
      <img :src="imgSrc"/>
    </talented2>
  </div>
</template>

<script>
    import talented2 from "./talented2";
    export default {
        data () {
          return {
            imgSrc: require("../../assets/img/talented/17.png")
          }
        },
        components: {
          talented2
        }
    }
</script>

<style lang="less" scoped>

</style>
