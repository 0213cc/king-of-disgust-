<template>
    <div>
        <StreamChartContent :cdata="chartData" />
    </div>
</template>
<script>
import StreamChartContent from './chart.vue'
import { mapState } from 'vuex'
import axios from 'axios'

export default {
    name: 'StreamChartContainer',
    components: {
        StreamChartContent
    },
    data() {
        return {
            chartData:{
                monthlyData: 
                    {"2015-05":1,"2015-06":7,"2015-07":28,"2015-08":71,"2015-09":84,"2015-10":63,"2015-11":86,"2015-12":113,"2016-01":121,"2016-02":91,"2016-03":144,"2016-04":173,"2016-05":240,"2016-06":211,"2016-07":240,"2016-08":234,"2016-09":225,"2016-10":248,"2016-11":292,"2016-12":305,"2017-01":250,"2017-02":292,"2017-03":352,"2017-04":303,"2017-05":324,"2017-06":331,"2017-07":337,"2017-08":372,"2017-09":340,"2017-10":313,"2017-11":296,"2017-12":389,"2018-01":366,"2018-02":270,"2018-03":425,"2018-04":412,"2018-05":395,"2018-06":360,"2018-07":398,"2018-08":450,"2018-09":465,"2018-10":417,"2018-11":419,"2018-12":1626,"2019-01":551,"2019-02":394,"2019-03":561,"2019-04":530,"2019-05":520,"2019-06":483,"2019-07":647,"2019-08":540,"2019-09":451,"2019-10":472,"2019-11":490,"2019-12":460,"2020-01":485,"2020-02":431,"2020-03":823,"2020-04":822,"2020-05":692,"2020-06":641,"2020-07":607,"2020-08":577,"2020-09":544,"2020-10":556,"2020-11":628,"2020-12":558,"2021-01":511,"2021-02":379,"2021-03":500,"2021-04":458,"2021-05":444,"2021-06":446,"2021-07":469,"2021-08":381,"2021-09":402,"2021-10":422,"2021-11":437,"2021-12":476,"2022-01":371,"2022-02":339,"2022-03":456,"2022-04":469,"2022-05":398,"2022-06":413,"2022-07":429,"2022-08":442,"2022-09":404,"2022-10":364,"2022-11":568,"2022-12":496,"2023-01":383,"2023-02":416,"2023-03":490,"2021-10":146}
                
            }
        }
    },
    mounted() {
    },
    computed: {
        ...mapState(['currentRepository'])
    },
    methods: {
        async fetchData(path) {
            const datePattern = /^\d{4}-(0[1-9]|1[0-2])$/;
            const filterData = (datas) => {
                let filteredDatas = {};
                for (const key in datas) {
                    if (datePattern.test(key)) {
                        filteredDatas[key] = datas[key];
                    }
                }
                return filteredDatas;
            }
            let participantsResponse = await axios.get(path + '/participants.json');
            let participantsData = await participantsResponse.data;
            participantsData = filterData(participantsData);
            let data={
                monthlyData: participantsData
            }
            console.log('转换后的数据:', data)
            return data

        }
    },
    watch: {
        currentRepository: {
            handler: async function (newVal) {
                try {
                    const data = await this.fetchData('https://oss.x-lab.info/open_digger/github/' + newVal)
                    this.chartData = data
                } catch (error) {
                }
            },
            deep: true
        }
    }
}
</script>
