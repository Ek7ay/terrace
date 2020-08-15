<template>
    <div class="toDoBox">
        <input
            type="text"
            v-model="inputValue"
        >
        <el-button
            type="primary"
            @click="addToList"
        >增加任务</el-button>
        <list />
    </div>
</template>

<script>
    import list from "./list";
    export default {
        data () {
            return {
                inputValue: '又换了一次密钥',
                list: []
            }
        },
        components: {
            list
        },
        methods: {
            addToList () {
                this.list.push(this.inputValue)
                this.$store.dispatch("saveList", this.list)
                this.inputValue = ""
            }
        }
    }
</script>

<style lang="less" scoped>
    .toDoBox {
        padding: 100px 0 0 100px;
        input {
            width: 300px;
            height: 40px;
            border: 1px solid #25a4bb;
            outline: none;
            border-radius: 5px;
            padding-left: 20px;
        }
    }
</style>