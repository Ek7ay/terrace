<template>
    <div class="experiment">
        <child ref="child"></child>
        <el-button @click="doSomething" type="primary" plain>主要按钮</el-button>
    </div>
</template>

<script>
    import child from "./child";
    export default {
        data () {
            return {
                count: 10
            }
        },
        components: {
            child
        },
        methods: {
            doSomething () {
                let res = this.$refs.child.info
                console.log(res)
            }
        }
    }
</script>

<style lang="less" scoped>
    .experiment {
        padding: 30px;
    }
</style>