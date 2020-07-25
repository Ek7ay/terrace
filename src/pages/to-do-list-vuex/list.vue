<template>
    <ul>
        <li
            v-for="(item, index) in list"
            :key="index"
        >
            {{item}}
            <el-button
                class="btn"
                type="danger"
                icon="el-icon-delete"
                size="mini"
                circle
                @click="deleteList(index)"
            ></el-button>
        </li>
    </ul>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState({
                list: state => state.toDoList
            })
        },
        methods: {
            deleteList (index) {
                this.list.splice(index, 1)
                this.$store.dispatch("saveList", this.list)
            }
        }
    }
</script>

<style lang="less" scoped>
     ul {
         margin-top: 20px;
         li {
             border-bottom: 1px solid black;
             width: 400px;
             height: 40px;
             line-height: 40px;
             .btn {
                 float: right;
                 margin-top: 8px;
             }
         }
     }
</style>