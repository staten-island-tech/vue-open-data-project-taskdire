<template>
  <div class="w-[23vw] h-[12vw] mx-[5px] flex flex-col justify-center items-center text-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl bg-white p-4">
    <h1 class="text-xl font-semibold text-gray-800">NYC Motorist Injuries by Contributing Factor</h1>
    <div class="w-full h-full flex justify-center items-center">
      <Bar v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Bar } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref(null);
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const fetchData = async () => {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/h9gi-nx95.json');
    const data = await response.json();
    
    const factorCounts = {};
    data.forEach(entry => {
      const factor = entry.contributing_factor_vehicle_1 || 'Unknown';
      factorCounts[factor] = (factorCounts[factor] || 0) + 1;
    });
    
    const labels = Object.keys(factorCounts);
    const values = Object.values(factorCounts);
    
    chartData.value = {
      labels,
      datasets: [{
        data: values,
        backgroundColor: '#1f2937',
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