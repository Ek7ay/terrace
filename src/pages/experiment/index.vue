<template>
    <div class="experiment">
        hello world
    </div>
</template>

<script>
    export default {
        data () {
            return {
                count: 10
            }
        },
        beforeCreate() {
            console.log(this.count)
        }
    }
</script>

<style lang="less" scoped>

</style>