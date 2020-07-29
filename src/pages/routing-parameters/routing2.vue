<template>
    <div class="routing2">
        <el-button
            type="success"
            icon="el-icon-message"
            circle
            @click="routing2"
        ></el-button>
        <div>
            {{show}}
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                show: "",
                info: "又是一个传递的参数"
            }
        },
        mounted () {
            this.show = this.$route.query.parameter
        },
        methods: {
            routing2 () {
                this.$router.push({
                    name: 'routing1',
                    params: {
                        data: this.info
                    }
                })
            }
        }
    }
</script>

<style lang="less" scoped>
    .routing2 {
        padding: 20px;
        div {
            margin-top: 20px;
        }
    }
</style>