<template>
  <div>
    <el-select
      v-model="value"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: '黄金糕',
          label: '黄金糕'
        }, {
          value: '双皮奶',
          label: '双皮奶'
        }, {
          value: '蚵仔煎',
          label: '蚵仔煎'
        }, {
          value: '龙须面',
          label: '龙须面'
        }, {
          value: '北京烤鸭',
          label: '北京烤鸭'
        }
      ],
      value: '北京烤鸭',
      arr: [1, {"key": 23}, 3, 4, 5, 6],
    }
  },
  watch: {
    // value (newVal, oldVal) {
    //   console.log(newVal, "newVal")
    //   console.log(oldVal, "oldVal")
    // },

    value: {
      deep: true,
      immediate: true,   //是否立即执行
      handler (newVal, oldVal) {
        console.log(newVal, "newVal")
        console.log(oldVal, "oldVal")
      },
    },

    // options (newVal, oldVal) {
    //   console.log(newVal, "newVal")
    //   console.log(oldVal, "oldVal")
    // },
    // options: {
    //   handler (newVal, oldVal) {
    //     console.log(newVal, "newVal")
    //     console.log(oldVal, "oldVal")
    //   },
    //   deep: true,
    // }
    // arr (newVal, oldVal) {
    //   console.log(newVal, "newVal")
    //   console.log(oldVal, "oldVal")
    // }
  },
  methods: {
    valueChange (newVal, oldVal) {
      console.log(newVal, "newVal")
      console.log(oldVal, "oldVal")
    }
  }

}
</script>

<style lang="less" scoped>

</style>
