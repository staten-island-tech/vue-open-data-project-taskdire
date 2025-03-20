<template>
    <div>
        <h1 class="text-x1">{{ info.vehicle_type_code1 }}</h1>
    </div>
</template>

<script setup>
defineProps({
    info: object;
})
</script>

<style scoped></style>