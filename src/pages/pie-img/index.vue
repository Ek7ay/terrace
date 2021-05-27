<template>
  <div class="echarts" ref="echarts"></div>
</template>

<script>
export default {
  data () {
    const trafficWay = [{
      name: '优秀学生',
      value: 80
    }, {
      name: '获得荣誉',
      value: 80
    }, {
      name: '论文著作',
      value: 80
    }];

    const data = [];
    const color = ['#00ffff', '#00cfff', '#006ced', '#ffe000', '#ffa800', '#ff5b00', '#ff3000']
    for (let i = 0; i < trafficWay.length; i++) {
      data.push({
        value: trafficWay[i].value,
        name: trafficWay[i].name,
        itemStyle: {
          normal: {
            borderWidth: 5,
            shadowBlur: 20,
            borderColor: color[i],
            shadowColor: color[i]
          }
        }
      }, {
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
      });
    }
    return {
      option: {
        backgroundColor: '#0A2E5D',
        color: color,
        title: {
          text: '广州市天河区教学成果分析',
          top: '48%',
          textAlign: "center",
          left: "49%",
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: '400'
          }
        },
        // graphic: {
        //   elements: [{
        //     type: "image",
        //     z: 3,
        //     style: {
        //       image: img,
        //       width: 178,
        //       height: 178
        //     },
        //     left: 'center',
        //     top: 'center',
        //     position: [100, 100]
        //   }]
        // },
        tooltip: {
          show: false
        },
        legend: {
          icon: "circle",
          orient: 'horizontal',
          // x: 'left',
          data: ['优秀学生', '获得荣誉', '论文著作'],
          right: 250,
          bottom: 100,
          align: 'right',
          textStyle: {
            color: "#fff"
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
          radius: [105, 109],
          hoverAnimation: false,
          itemStyle: {
            normal: {
              label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                  var percent = 0;
                  var total = 0;
                  for (var i = 0; i < trafficWay.length; i++) {
                    total += trafficWay[i].value;
                  }
                  percent = ((params.value / total) * 100).toFixed(0);
                  if (params.name !== '') {
                    return   params.name + '\n' + '\n' + '占百分比：' + percent + '%';
                  } else {
                    return '';
                  }
                },
              },
              labelLine: {
                length: 30,
                length2: 100,
                show: true,
                color: '#00ffff'
              }
            }
          },
          data: data
        }]
      },
    }
  },
  mounted() {
    this.echartsInit();
  },
  methods: {
    echartsInit () {
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
