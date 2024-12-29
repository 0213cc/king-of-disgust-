<template>
        <div id="card-container">
          <div class="chart-title">时间序列分布</div>
          <CardChartContainer/>
        </div>
  </template>
  <script>
  import CardChartContainer from '@/components/echart/cardchart'
  export default {
    components: {
      CardChartContainer
    }
  }
  </script>

  <style lang="scss" scoped>
  #card-container {
    padding: 20px 16px;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    
    .chart-title {
      color: #4B0082;  // 靛青色(Indigo)
      font-size: 24px;
      margin-bottom: 10px;
      text-align: center;
      font-weight: bold;
    }
  }
  </style>
