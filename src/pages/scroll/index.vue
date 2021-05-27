<template>
  <div class="box" id="box" @scroll="scrollEvent">
    <child ref="box" />
  </div>
</template>

<script>
import child from "./child";
export default {
  components:{
    child
  },
  data() {
    return {

    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
    // console.log(this.$refs.box.getBoundingClientRect().top)
  },
  methods: {
    handleScroll() {
      // console.log(document.documentElement.scrollTop)
      console.log(this.$refs.box.$el.getBoundingClientRect().top)
      // console.log(this.$refs.box1)
      // console.log(this.$refs.box.getBoundingClientRect().top)   //一个元素到浏览器顶部的距离
    },
    scrollEvent(e) {
      // console.log(e.target.offsetTop)
      // let a = e.target.scrollTop
      // console.log(a)
    }
  }
}
</script>

<style lang="less" scoped>
.box {
  width: 200px;
  height: 500px;
  margin: 200px;
  overflow-y: scroll;
  .content {
    height: 1000px;
    background: #2c92de;
  }
}
</style>
