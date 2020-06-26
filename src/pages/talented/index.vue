<template>
    <div>
        <Talent :status="sta"></Talent>
    </div>
</template>

<script>
    import Talent from "./talent";
    export default {
        data () {
          return {
            sta: 2
          }
        },
        components: {
          Talent
        }
    }
</script>

<style lang="less" scoped>

</style>
