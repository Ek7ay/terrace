<template>
    <div>
        <div
            class="commodity"
            v-for="(item, index) in info"
            :key="item.id"
        >
            <span>{{item.name}}</span>----
            <span>{{item.price}}</span>
            <a href="javascript:;" @click="addCommodity(item.id)">加入购物车</a>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            info: {}
        },
        methods: {
            addCommodity (id) {
                this.$emit("getId", id)
            }
        }
    }
</script>

<style lang="less" scoped>
    .commodity {
        margin-top: 20px;
        line-height: 10px;
        a {
            margin-left: 50px;
        }
    }
</style>
