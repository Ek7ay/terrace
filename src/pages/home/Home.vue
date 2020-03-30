<template>
    <div>{{phNum}}</div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data () {
          return {

          }
        },
        computed: {
          // 从store中取值
          ...mapState({
            phNum: state => state.phone
          })
        }
    }
</script>

<style lang="less" scoped>

</style>
