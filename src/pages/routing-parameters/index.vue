<template>
    <div class="routerBox">
        <el-button type="primary" @click="routing">主要按钮</el-button>
        <div>{{receive}}</div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                info: "传递的参数",
                receive: ""
            }
        },
        mounted () {
            this.receive = this.$route.params.data
        },
        methods: {
            routing () {
                this.$router.push({
                    path: '/home/routing2',
                    query: {
                        parameter: this.info
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .routerBox {
        padding: 20px;
        div {
            margin-top: 30px;
        }
    }
</style>