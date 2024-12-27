<template>
  <div id="center1-container">
    <div class="bg-color-black">
      <div>
        <RainfallChartContainer/>
      </div>
    </div>
  </div>
</template>

<script>
import RainfallChartContainer from '@/components/echart/center/rainfallChart'

export default {
  components: {
    RainfallChartContainer
  }
}
</script>

<style lang="scss" scoped>
#center1-container {
  padding: 20px 16px;
  height: 450px;
  width: 100%;
  border-radius: 5px;
  .bg-color-black {
    height: 415px;
    border-radius: 10px;
  }
}
</style> 