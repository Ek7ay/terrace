<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-input v-model="person.firstName" placeholder="firstName"></el-input>
      </el-col>
      <el-col :span="24">
        <el-input v-model="person.lastName" placeholder="lastName"></el-input>
      </el-col>
      <el-col :span="24">
        <el-input v-model="fullName" placeholder="fullName"></el-input>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: {
        firstName: '',
        lastName: ''
      }
    }
  },
  computed: {
    fullName() {
      // console.log("触发计算属性")
      return this.person.firstName + ' ' + this.person.lastName
    },
    // fullName: {
    //   // getter
    //   get () {
    //     return this.person.firstName + ' ' + this.person.lastName
    //   },
    //   // setter
    //   set (newValue) {
    //     console.log(newValue)
    //     const fullName = newValue.split(' ')
    //     this.person.firstName = fullName[0]
    //     this.person.lastName = fullName[1]
    //   }
    // },
    //利用计算属性和watch实现深度监听
    // firstName () {
    //   return this.person.firstName;
    // }
  },
  watch: {
    // person(newVal, oldVal) {
    //   console.log(newVal, "newVal")
    //   console.log(oldVal, "oldVal")
    // },
    // person: {
    //   deep: false,
    //   immediate: false,
    //     handler(newVal, oldVal) {
    //       console.log(newVal, "newVal")
    //       console.log(oldVal, "oldVal")
    //     },
    // },

    // 使用字符串形式监听
    'person.firstName' (newVal, oldVal) {
      console.log(newVal, "newVal")
      console.log(oldVal, "oldVal")
    },

    //利用计算属性和watch实现深度监听
    // firstName(newVal, oldVal) {
    //     console.log(newVal, "newVal")
    //     console.log(oldVal, "oldVal")
    // }

  }
}
</script>

<style lang="less" scoped>

</style>
