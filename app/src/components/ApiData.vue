<template>
    <container>
        <CardProps v-for="(info, index) in Array" :key="index" :info="info" :id="index + 1">
            {{ info.vehicle_type_code1 }}

        </CardProps>

    </container>
</template>

<script setup>
import CardProps from './CardProps.vue';
import { onMounted, ref } from 'vue';

const Array = ref([]);

async function getdata() {
    try {
        const response = await fetch("https://data.cityofnewyork.us/resource/h9gi-nx95.json?");
        if (response.status != 200) {
            throw new Error(response);
        } else {
            const data = await response.json();
            Array.value = data;
            console.log(Array.value);
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