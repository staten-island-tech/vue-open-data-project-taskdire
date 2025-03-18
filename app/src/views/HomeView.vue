<template>
  <div>
    <div v-for="(car, index) in cars" :key="index" :car="car" :id="index + 1">
      {{ car.vehicle_type_code1 }}

    </div>

  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
const url = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";

const cars = ref([]);

async function getdata() {
  try {
    const response = await fetch(url);
    if (response.status != 200) {
      throw new Error(response);
    } else {
      const data = await response.json();
      cars.value = data;
      console.log(cars.value);
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