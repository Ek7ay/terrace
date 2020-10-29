<template>
  <div class="box">
    <div
      v-for="(item, index) in menuList"
      :key="item.id"
      class="menu-item"
      :class="menuActive === index?'menu-item-special':''"
      @click="menuActiveClick(index, item.path)"
      @mouseenter="enter(index)"
      @mouseleave="UpRoll(index)"
    >
      {{ item.name }}
      <ul
        v-show="hoverActive === index ? true : false"
      >
        <li
          :class="hoverMenuActive === key?'li-item-special':''"
          v-for="(val, key) in item.children"
          :key="val.id"
          @click.stop="hoverMenuActiveClick(val.path, index)"
          @mouseenter="hoverEnter(key)"
        >{{ val.name }}</li>
      </ul>
    </div>

<!--    <div-->
<!--      class="menu-item"-->
<!--      @mouseenter="enter()"-->
<!--      @mouseleave="UpRoll()"-->
<!--    >-->
<!--      风险预警-->
<!--      <ul-->
<!--        v-show="menuActive === index ? true : false"-->
<!--      >-->
<!--        <li>菜单1</li>-->
<!--        <li>菜单2</li>-->
<!--        <li>菜单3</li>-->
<!--      </ul>-->
<!--    </div>-->

<!--    <div class="menu-item">舆情监测</div>-->
<!--    <div class="menu-item">高级搜索</div>-->
<!--    <div class="menu-item">协同联动</div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuList: [
        {
          id: "1",
          name: "整体态势",
          path: "/home/OverallSituation"
        },
        {
          id: "2",
          name: "风险预警",
          path: "/home/WarningQuery",
          children: [
            {
              id: '33',
              name: '大哥',
              path: "/大哥",
            },
            {
              id: '34',
              name: '二哥',
              path: "/二哥",
            }
          ]
        },
        {
          id: "3",
          name: "舆情监测",
          path: "/home/riskMonitoring",
          children: [
            {
              id: '31',
              name: '舆情态势',
              path: "/测试1",
            },
            {
              id: '32',
              name: '企业舆情',
              path: "/测试2",
            }
          ]
        },
        {
          id: "4",
          name: "高级搜索",
          path: "/home/AdvancedSearch"
        },
        {
          id: "5",
          name: "协同联动",
          path: "/home/linkage"
        },
      ],
      isShow: false,
      menuActive: 0,  //一级颜色
      hoverActive: "",  //二级位置
      hoverMenuActive: "" //二级颜色
    }
  },
  methods: {
    menuActiveClick(index, val) {
      this.menuActive = index;
      console.log(val);
    },
    enter (index) {
      this.hoverActive = index;
      console.log("鼠标移入");
    },
    UpRoll () {
      this.hoverActive = "";
      console.log("鼠标移出");
    },
    //点击二级菜单
    hoverMenuActiveClick(data, index) {
      console.log(data)
      this.menuActive = index;
      this.hoverActive = "";
    },
    hoverEnter(data) {
      this.hoverMenuActive = data;
    }
  }
}
</script>

<style lang="less" scoped>
  .box {
    width: 800px;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 24px;
    background: darkblue;
    .menu-item {
      cursor: pointer;
      white-space: nowrap;
      //overflow: hidden;
      text-overflow: ellipsis;
      color: white;
      position: relative;
      ul {
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background: darkblue;
        li {
          background: darkblue;
          text-align: center;
          width: 100%;
          height: 60px;
          line-height: 60px;
          font-size: 20px;
          color: white;
        }
        .li-item-special {
          color: #8b0cce;
          background: #2c92de;
        }
      }
    }
    .menu-item-special {
      color: #f44336;
    }
  }
</style>
