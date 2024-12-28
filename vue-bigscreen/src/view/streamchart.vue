<template>
  <div class="chart-wrapper">
    <h2 class="chart-title">项目贡献者数</h2>
    <StreamChartContainer/>
  </div>
</template>

<script>
import StreamChartContainer from '@/components/echart/stream'
export default {
  components: {
    StreamChartContainer
  }
}
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.chart-title {
  text-align: center;
  color: #006400;
}
</style>