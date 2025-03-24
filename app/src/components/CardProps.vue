<template>
    <div
      class="card w-[23vw] h-[12vw] mx-[5px] flex flex-col justify-center items-center text-center">
      <h1 class="text-x1">{{ info.vehicle_type_code1 }}</h1>
    </div>
    </template>
    
    <script setup>
    defineProps({
      info: Object,
    })
    </script>
    
    <style scoped></style>