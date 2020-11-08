<template>
  <div>map</div>
</template>

<script>
export default {
  data() {
    return {
      count: 10,
    };
  },
  mounted() {
    this.$axios
      .get(
        "https://restapi.amap.com/v3/config/district?keywords=山西&subdistrict=0&extensions=base&key=fe48ecd68942a050e7a3a6ba5a43340a"
      )
      .then(res => {
        console.log(res)
      })
      .catch(res => {
        console.log(res);
      });
  },
  methods: {},
};
</script>

<style lang="less" scoped>
</style>