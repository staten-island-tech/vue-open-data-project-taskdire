<template>
    <div
        class="card w-[23vw] h-[12vw] mx-[5px] flex flex-col justify-center items-center text-center rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
        <h1 class="text-xl font-semibold text-gray-800">{{ info.vehicle_type_code1 }}</h1>
    </div>
</template>

<script setup>
defineProps({
    info: Object,
})
</script>

<style scoped></style>
