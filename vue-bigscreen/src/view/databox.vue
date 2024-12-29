<template>
    <div class="databox-container">
        <DataBoxContainer/>
    </div>
</template>

<script>
import DataBoxContainer from '@/components/echart/databox'
export default {
    components: {
        DataBoxContainer
    }
}
</script>

<style scoped>
.databox-container {
    height: 100%;
    width: 100%;
}
</style>
