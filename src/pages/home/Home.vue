<template>
    <div>
      <div class="header">
        <span class="left">运维平台</span>
        <div class="right">
          <img src="../../assets/img/yonghuming.png"/>
          <span>{{ userName }}</span>
          <img @click="exit" src="../../assets/img/tuichu.png"/>
        </div>
      </div>
      <div class="menu">
        <el-menu
          :router="true"
          @open="handleOpen"
          @close="handleClose">
          <el-submenu
            index="1"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>组件封装</span>
            </template>
            <el-menu-item index="/home">购物车</el-menu-item>
            <el-menu-item index="/home/talented">封装input传状态</el-menu-item>
            <el-menu-item index="/home/talented2">封装input用插槽</el-menu-item>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">数据表格，表单</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div class="subject">
        <router-view/>
      </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        data () {
          return {

          }
        },
        computed: {
          // 从store中取值
          ...mapState({
            phNum: state => state.phone,
            userName: state => state.userName,
          })
        },
        methods: {
          exit () {
            this.$router.push({path:'/'})
          },
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
    }
</script>

<style lang="less" scoped>
    .header {
      height: 50px;
      line-height: 50px;
      background: #f44336;
      .left {
        padding-left: 80px;
        font-size: 16px;
        color: white;
      }
      .right {
        height: 100%;
        width: 200px;
        float: right;
        span {
          color: white;
        }
        img:first-child {
          margin-right: 10px;
        }
        img:last-child {
          position: absolute;
          top: 12px;
          right: 23px;
          cursor: pointer;
        }
      }
    }
    .menu {
      position: absolute;
      top: 50px;
      left: 0;
      bottom: 0;
      width: 200px;
      background: #ffffff;
    }
    .subject {
      position: absolute;
      top: 50px;
      left: 200px;
      right: 0;
      bottom: 0;
      background: #eee;
    }
</style>
