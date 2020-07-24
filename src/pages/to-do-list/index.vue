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
        <list
            :info="list"
            @getIndex="deleteInputValue"
        />
    </div>
</template>

<script>
    import list from "./list";
    export default {
        data () {
            return {
                inputValue: '',
                list: []
            }
        },
        components: {
            list
        },
        methods: {
            addToList () {
                this.list.push(this.inputValue)
                this.inputValue = ""
            },
            deleteInputValue (index) {
                this.list.splice(index, 1)
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