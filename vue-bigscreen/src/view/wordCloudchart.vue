<template>
  <div id="card-container">
    <div class="chart-title">贡献者词云</div>
    <wordCloud :cdata="yourData" />
  </div>
</template>

<script>
import wordCloud from "@/components/wordCloud";
export default {
  components: {
    wordCloud
  },
};
</script>

<style lang="scss" scoped>
#card-container {
  padding: 20px 16px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  
  .chart-title {
    color: #B22222;  
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
  }
}
</style>