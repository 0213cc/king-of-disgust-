<template>
    <div class="data-box-container">
        <div v-for="(item, index) in cdata" :key="index" class="data-box">
            <div :id="'dataChart' + index" class="chart-container"></div>
            <div class="data-info">
                <div class="number">{{ item.value }}</div>
                <div class="label">{{ item.label }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts-liquidfill'

export default {
    name: 'DataBox',
    data() {
        return {
            charts: [],
            options: []
        }
    },
    props: {
        cdata: {
            type: Array,
            default: () => ([
                {
                    value: '0',
                    label: 'star总数',
                    percentage: 0,
                    color: '#2d8cf0'
                },
                {
                    value: '0',
                    label: 'fork总数',
                    percentage: 0,
                    color: '#19be6b'
                },
                {
                    value: '0',
                    label: 'issue总数',
                    percentage: 0,
                    color: '#ff9900'
                },
                {
                    value: '0',
                    label: 'PR总数',
                    percentage: 0,
                    color: '#ed4014'
                }
            ])
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            // 清除现有图表
            this.charts.forEach(chart => {
                chart && chart.dispose()
            })
            this.charts = []
            
            // 初始化新图表
            this.$nextTick(() => {
                this.cdata.forEach((item, index) => {
                    const chartDom = document.getElementById('dataChart' + index)
                    if (chartDom) {
                        const chart = echarts.init(chartDom)
                        const option = {
                            series: [{
                                type: 'liquidFill',
                                data: [item.percentage / 100],
                                radius: '80%',
                                color: [item.color || '#2d8cf0'],
                                backgroundStyle: {
                                    color:"rgba(220, 208, 255, 0.4)"
                                },
                                outline: {
                                    show: false
                                },
                                label: {
                                    show: true,
                                    position: ['50%', '50%'],
                                    formatter: Math.round(item.percentage) + '%',
                                    fontSize: 24,
                                    color: '#fff'
                                }
                            }]
                        }
                        chart.setOption(option)
                        this.charts.push(chart)
                        this.options.push(option)
                    }
                })
            })
        },
        updateChart() {
            this.charts.forEach((chart, index) => {
                if (chart && this.options[index]) {
                    chart.setOption(this.options[index])
                }
            })
        }
    },
    watch: {
        cdata: {
            handler(newData) {
                if (newData && newData.length > 0) {
                    this.options = newData.map(item => ({
                        series: [{
                            type: 'liquidFill',
                            data: [item.percentage / 100],
                            radius: '80%',
                            color: [item.color || '#2d8cf0'],
                            backgroundStyle: {
                                color: "rgba(220, 208, 255, 0.4)"
                            },
                            outline: {
                                show: false
                            },
                            label: {
                                show: true,
                                position: ['50%', '50%'],
                                formatter: Math.round(item.percentage) + '%',
                                fontSize: 24,
                                color: '#fff'
                            }
                        }]
                    }))
                    this.$nextTick(() => {
                        this.updateChart()
                    })
                }
            },
            immediate: true,
            deep: true
        }
    },
    beforeUnmount() {
        this.charts.forEach(chart => {
            chart && chart.dispose()
        })
        this.charts = []
    }
}
</script>

<style scoped>
.data-box-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    height: 100%;
    width: 100%;
    padding-top: 40px;
}

.data-box {
    background: rgba(45, 140, 240, 0.01);
    border-radius: 8px;
    padding: 15px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.001);
    display: flex;
    flex-direction: column;
}

.chart-container {
    flex: 1;
    min-height: 120px;
}

.data-info {
    text-align: center;
    margin-top: 5px;
}

.number {
    font-size: 30px;
    font-weight: bold;
    color: rgba(147, 112, 219, 1);
}

.label {
    font-size: 30px;
    color: rgba(147, 112, 219, 1);
    margin-top: 3px;
}
</style>
