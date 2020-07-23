<template>
    <div class="cardBox">
        <div v-for="(item, index) in info" :key="item.id">
            <span>{{item.name}}</span>
            <span>(数量{{item.num}})</span>
            <a href="javascript:;" @click="addCommodity(item.id)">增加</a>
            <a href="javascript:;" @click="delCommodity(item.id)">减少</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            info: {}
        },
        methods: {
            addCommodity(id) {
                this.$emit("getId", id)
            },
            delCommodity(id) {
                this.$emit("delId", id)
            }
        }
    }
</script>

<style lang="less" scoped>
    .cardBox{
        margin-top: 20px;
        line-height: 30px;
        a {
            margin-left: 15px;
        }
    }
</style>