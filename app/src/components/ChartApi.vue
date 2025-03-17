<template>
    <div>

    </div>
</template>

<script setup>
const url = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";

async function getdata() {
    try {
        const response = await fetch(url);
        if (response.status != 200) {
            throw new Error(response);
        } else {
            const data = await response.json();
            const apidata = data.data;
            console.log(apidata);
        }
    } catch (error) {
        console.log(error);
        alert("Sorry, could not find this.");
    }
}

getdata();
</script>

<style lang="scss" scoped></style>