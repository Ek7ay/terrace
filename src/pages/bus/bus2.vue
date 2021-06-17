<template>
  <div>
   <p>{{bInfo}}</p>
  </div>
</template>

<script>

// import { EventBus } from '../../plugins/event-bus'
export default {
  data () {
    return {
      bInfo: ""
    }
  },
  created() {
    this.$EventBus.$on("aMsg", (msg) => {
      this.bInfo = msg;
    });
  },
  // beforeDestroy() {
  //   EventBus.$off();
  // },
}
</script>

<style scoped>

</style>
