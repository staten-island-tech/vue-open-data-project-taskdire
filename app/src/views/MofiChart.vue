<template>
  <div class="w-[23vw] h-[12vw] mx-[5px] flex flex-col justify-center items-center text-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl bg-white p-4">
    <h1 class="text-xl font-semibold text-gray-800">Motorist Injuries by Borough</h1>
    <div class="w-full h-full flex justify-center items-center">
      <Pie v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const chartData = ref(null);
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
};

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json');
    const data = await response.json();

    const boroughCounts = {};
    data.forEach(entry => {
      const borough = entry.borough;
      if (borough) {
        boroughCounts[borough] = (boroughCounts[borough] || 0) + parseInt(entry.number_of_motorist_injured || 0);
      }
    });

    const labels = Object.keys(boroughCounts);
    const values = Object.values(boroughCounts);

    chartData.value = {
      labels,
      datasets: [{
        data: values,
        backgroundColor: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af'],
      }]
    };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

onMounted(fetchData);
</script>

<style scoped>
div * {
  font-family: 'Cabin', sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
</style>
