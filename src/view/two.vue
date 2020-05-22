<template>
  <div>
    <div id="myChart" style="width: 100%; height: 360px"></div>
  </div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'two',
    data() {
      return {
        msg: 'Welcome'
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
          title: {
            text: '访问量统计'
          },
          tooltip: {
            trigger: 'axis'
          },
          grid: {
            left: '1%',
            right: '1%',
            bottom: '1%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ["01.01", "01.02", "01.03", "01.04", "01.05", "01.06"]
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            name: '访问量',
            type: 'line',
            data: [8, 20, 36, 10, 10, 20],
            markLine: {
              data: [
                {
                  type: 'average',
                  name: '平均值',
                  symbol: 'circle'
                }
              ],
              label: {
                normal: {
                  show: true,
                  position: 'middle',
                  formatter: '{b}: {c}'
                }
              }
            }
          }]
        })
      }
    }
  }
</script>

<style scoped>

</style>
