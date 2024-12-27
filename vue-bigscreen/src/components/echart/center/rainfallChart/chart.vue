<template>
  <div id="RainfallChart" class="chart-box" style="height: 480px; width: 600px;"></div>
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
          title: {
            text: 'Rainfall and Flow Relationship',
            left: 'center'
          },
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
            data: ['Flow', 'Rainfall'],
            left: 10
          },
          dataZoom: [
            {
              show: true,
              realtime: true,
              start: 65,
              end: 85
            },
            {
              type: 'inside',
              realtime: true,
              start: 65,
              end: 85
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
              name: 'Flow(m³/s)',
              type: 'value'
            },
            {
              name: 'Rainfall(mm)',
              nameLocation: 'start',
              alignTicks: true,
              type: 'value',
              inverse: true
            }
          ],
          series: [
            {
              name: 'Flow',
              type: 'line',
              areaStyle: {},
              lineStyle: {
                width: 1
              },
              emphasis: {
                focus: 'series'
              },
              data: newData.flowData || []
            },
            {
              name: 'Rainfall',
              type: 'line',
              yAxisIndex: 1,
              areaStyle: {},
              lineStyle: {
                width: 1
              },
              emphasis: {
                focus: 'series'
              },
              data: newData.rainfallData || []
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