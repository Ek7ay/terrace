<template>
  <div class="login">
    <div class="login-box">
      <el-form :model="loginInfo" :rules="rules" ref="loginRuleForm" label-width="80px">
        <el-form-item label="账号" prop="user">
          <el-input v-model="loginInfo.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginInfo.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登陆</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
    import { pwdLogin } from '../../serve/index.js';
    export default {
        data () {
          return {
            loginInfo: {
              user: '',
              password: '',
            },
            rules: {
              user: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]
            }
          }
        },
        methods : {
          login () {
            this.$refs.loginRuleForm.validate((valid) => {
              if (valid) {
                pwdLogin().then(res => {
                  // if (res.success) {
                  //
                  // }
                  console.log(res)
                })
              } else {
                console.log('error submit!!');
                return false;
              }
            });
          }
        }
    }
</script>

<style lang="less" scoped>
  .login {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: url("../../assets/img/login.jpg") no-repeat;
    .login-box {
      width: 500px;
      height: 300px;
      border-radius: 5px;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 53px 80px 0 20px;
    }
    .el-form-item {
      margin-bottom: 37px;
    }
    .el-button--primary {
      width: 100%;
    }
  }
</style>
