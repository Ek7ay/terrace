<template>
    <div class="table-box">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="上海" value="shanghai"></el-option>
                    <el-option label="北京" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
        </el-form>

        <el-table
            :data="tableData"
            border
            style="width: 100%">
            <el-table-column
                prop="date"
                label="日期"
            >
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名"
            >
            </el-table-column>
            <el-table-column
                prop="province"
                label="省份"
            >
            </el-table-column>
            <el-table-column
                prop="city"
                label="市区"
            >
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
            >
            </el-table-column>
            <el-table-column
                prop="zip"
                label="邮编"
            >
            </el-table-column>
            <el-table-column
                label="操作"
            >
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button @click="handleClick(scope)" type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            class="pagination"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 50]"
            :page-size="10"
            layout="sizes, total, prev, pager, next, jumper"
            :total="300">
        </el-pagination>

        <Dialog
            :info="dialog"
            @getFormVisible="visible"
        />
    </div>
</template>

<script>
    import Dialog from "./dialog";

    export default {
        data() {
            return {
                formInline: {
                    user: '',
                    region: ''
                },
                currentPage: 1,  //分页当前页
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1518 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-04',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1517 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-01',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1519 弄',
                        zip: 200333
                    }, {
                        date: '2016-05-03',
                        name: '王小虎',
                        province: '上海',
                        city: '普陀区',
                        address: '上海市普陀区金沙江路 1516 弄',
                        zip: 200333
                    }],
                dialog: false
            }
        },
        components: {
            Dialog
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            },
            handleClick(data) {
                console.log(data);
                this.dialog = true
            },
            visible() {
                this.dialog = false
            },
            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style lang="less" scoped>
    .table-box {
        padding: 20px;

        .pagination {
            text-align: center;
            margin-top: 30px;
        }
    }
</style>