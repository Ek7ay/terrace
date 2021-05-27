<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
export default {
  data() {
    return {
      trafficWay: [
        {
          name: '优秀学生',
          value: 20
        }, {
          name: '获得荣誉',
          value: 10
        }, {
          name: '论文著作',
          value: 30
        }
      ],
      color: ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000'],
      imgUrl: require("../../assets/img/do.png"),
    }
  },
  computed: {
    option() {
      const data = [];
      this.trafficWay.map((item, index) => {
        data.push(
          {
            value: item.value,
            name: item.name,
            itemStyle: {
              normal: {
                borderWidth: 5,
                shadowBlur: 20,
                borderColor: this.color[index],
                shadowColor: this.color[index],
                borderRadius: 10,
              }
            }
          },
          {
            value: 2,
            name: '',
            itemStyle: {
              normal: {
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
              }
            }
          }
        );
      })
      const that = this;
      let img = new Image();
      img.src = this.imgUrl;
      return {
        backgroundColor: '#fff',
        color: this.color,
        title: {
          // text: '成果分析',
          top: '48%',
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: '#000',
            fontSize: 14,
            fontWeight: '400'
          }
        },
        graphic: {
          elements: [{
            type: "image",
            z: 3,
            style: {
              image: img,
              width: 125,
              height: 125
            },
            left: 'center',
            top: 'center',
            position: [100, 100]
          }]
        },
        //鼠标hover提示
        tooltip: {
          show: true
        },
        legend: {
          icon: "circle",
          orient: 'horizontal',
          // x: 'left',
          // data: ['优秀学生', '获得荣誉', '论文著作'],
          data: this.trafficWay.map(item => {
            return item.name
          }),
          right: 250,
          bottom: 100,
          align: 'right',
          textStyle: {
            color: "#000"
          },
          itemGap: 20
        },
        toolbox: {
          show: false
        },
        series: [{
          name: '',
          type: 'pie',
          clockWise: false,
          radius: [105, 110],
          hoverAnimation: false,   //hover时扇形是否变大
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#000',
                formatter: function (params) {
                  let percent = 0;
                  let total = 0;
                  for (let i = 0; i < that.trafficWay.length; i++) {
                    total += that.trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== '') {
                    return params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                  } else {
                    return '';
                  }
                },
              },
              labelLine: {
                length: 30,
                length2: 30,
                show: true,
                color: '#00ffff'
              }
            }
          },
          data: data,
        }]
      };

    }
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit() {
      const myEcharts = this.$echarts.init(this.$refs.echarts)
      myEcharts.setOption(this.option)
    }
  }
}
</script>

<style lang="less" scoped>
.echarts {
  width: 700px;
  height: 700px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid red;
}
</style>
