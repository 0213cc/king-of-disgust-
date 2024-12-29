<template>
  <div id="RainfallChart" class="chart-box" style="height: 600px; width: 100%;"></div>
</template>

<script>
import * as echarts from 'echarts'

export default {
  name: 'RainfallChartContent',
  data() {
    return {
      chart: null,
      options: {}
    }
  },
  props: {
    cdata: {
      type: Object,
      default: () => ({        
        timeData: [],
        flowData: [],
        rainfallData: []
      })
    }
  },
  mounted() {
    this.initChart()
  },
  methods: {
    initChart() {
      this.chart = echarts.init(document.getElementById('RainfallChart'))
      this.updateChart()
    },
    updateChart() {
      if (this.chart) {
        this.chart.setOption(this.options)
      }
    }
  },
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          grid: {
            bottom: 80
          },
          toolbox: {
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              restore: {},
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                backgroundColor: '#505765'
              }
            }
          },
          legend: {
            data: ['Activity', 'Openrank'],
            left: 10
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 0,
              end: 75
            },
            {
              type: 'inside',
              realtime: true,
              start: 20,
              end: 75
            }
          ],
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { onZero: false },
            data: newData.timeData?.map(str => str.replace(' ', '\n')) || []
          }],
          yAxis: [
            {
              name: '项目活跃度',
              type: 'value'
            },
            {
              name: 'Openrank值',
              type: 'value',
            }
          ],
          series: [
            {
              name: 'Activity',
              type: 'line',
              areaStyle: {},
              lineStyle: {
                width: 1
              },
              emphasis: {
                focus: 'series'
              },
              data: newData.activityData || []
            },
            {
              name: 'Openrank',
              type: 'line',
              yAxisIndex: 1,
              areaStyle: {},
              lineStyle: {
                width: 1
              },
              emphasis: {
                focus: 'series'
              },
              data: newData.openrankData || []
            }
          ]
        }
        this.$nextTick(() => {
          this.updateChart()
        })
      },
      immediate: true,
      deep: true
    }
  },
  beforeUnmount() {
    if (this.chart) {
      this.chart.dispose()
      this.chart = null
    }
  }
}
</script>

<style scoped>
</style> 