<template>
  <div class="chart-container">
    <div class="title">
      <span>贡献者词云</span>
    </div>
    <div>
      <wordCloud :cdata="yourData" />
    </div>
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
.chart-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  .title {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    
    span {
      font-size: 24px;
      font-weight: bold;
      color: #553C9A;  // 深灰蓝色，看起来更专业
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }
}
</style>