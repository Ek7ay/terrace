<template>
  <div>
    <el-button @click="brotherA">默认按钮</el-button>
  </div>
</template>

<script>
// import { EventBus } from '../../plugins/event-bus'
export default {
  data () {
    return {
      info: "a向b传递的信息"
    }
  },
  destroyed(){
    this.$EventBus.$emit("aMsg", this.info);
  },
  methods: {
    brotherA () {
      // EventBus.$emit("aMsg", this.info);
      this.$router.push({ path: '/home/bus2'})
    }
  }
}
</script>

<style scoped>

</style>
