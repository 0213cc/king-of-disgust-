<template>
  <div id="code-change-container">
    <div class="chart-title">代码变更统计</div>
    <div class="bg-color-black">
      <div style="height: 100%;">
        <CodeChangeChartContainer/>
      </div>
    </div>
  </div>
</template>

<script>
import CodeChangeChartContainer from '@/components/echart/codeChangeChart'

export default {
  components: {
    CodeChangeChartContainer
  }
}
</script>

<style lang="scss" scoped>
#code-change-container {
  padding: 20px 16px;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  
  .chart-title {
    color: #4682B4;
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }
  
  .bg-color-black {
    flex: 1;
    border-radius: 10px;
    
    > div {
      height: 100%;
    }
  }
}
</style> 