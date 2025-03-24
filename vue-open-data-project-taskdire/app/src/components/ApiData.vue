<template>
    <div>
        <div v-for="(info, index) in Array" :key="index" :info="info" :id="index + 1">
            {{ info.vehicle_type_code1 }}

        </div>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const url = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";

const Array = ref([]);

async function getdata() {
    try {
        const response = await fetch(url);
        if (response.status != 200) {
            throw new Error(response);
        } else {
            const data = await response.json();
            info.value = data;
            console.log(info.value);
        }
    } catch (error) {
        console.log(error);
        alert("Sorry, could not find this.");
    }
}

getdata();

onMounted(() => {
    getdata()
})
</script>

<style lang="scss" scoped></style>