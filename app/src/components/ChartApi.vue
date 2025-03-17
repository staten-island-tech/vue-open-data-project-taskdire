<template>
    <div>
        <div v-for="(car, index) in cars" :key="index" :car="car" :id="index + 1">{{ car.vehicle_type_code1 }}</div>

    </div>
</template>

<script setup>
import { ref, onMounted } from `vue`

const cars = ref([])

async function getcar() {
    try {
        const response = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json")
        let data = await response.json()
        cars.value = data
        console.log(data)
    } catch (error) {
        console.error('error fetching data:', error)
    }
}
onMounted(() => {
    getcar()
})


</script>

<style lang="scss" scoped></style>