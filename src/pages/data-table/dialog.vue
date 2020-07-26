<template>
    <el-dialog
        title="详情"
        :visible.sync="dialogFormVisible"
        @close="handleClose"
    >
        <el-form :model="form" :label-position="labelPosition">
            <el-row :gutter="30">
                <el-col :span="12">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select style="width: 100%" v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="上海" value="shanghai"></el-option>
                            <el-option label="北京" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                        <el-select style="width: 100%" v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="上海" value="shanghai"></el-option>
                            <el-option label="北京" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="formVisible">取 消</el-button>
            <el-button type="primary" @click="formVisible">确 定</el-button>
        </div>
    </el-dialog>

</template>

<script>
    export default {
        props: {
            info: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                dialogFormVisible: false,
                labelPosition: "top",
                formLabelWidth: '80px',
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        watch: {
            info (val) {
                this.dialogFormVisible = val
            }
        },
        methods: {
            formVisible () {
                this.$emit("getFormVisible")
            },
            handleClose () {
                this.$emit("getFormVisible")
            }
        }
    }
</script>

<style lang="less" scoped>

</style>