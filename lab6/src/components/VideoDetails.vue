<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
import { onMounted, ref } from 'vue';

let username = ref("");
let description = ref("");

onMounted(() => {
    const api_url = "http://127.0.0.1:5173/tiktok.json";
    fetch(api_url)
        .then(res => res.json())
        .then(data => {
            username.value = data.videos[0].username;
            description.value = data.videos[0].description;
        })
});
</script>

<template>
  <div class="video__details">
    <h3>{{ username }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
    .video__details{
        padding:0 1rem;
    }
</style>
