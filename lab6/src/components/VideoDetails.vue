<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
import { onMounted, ref } from 'vue';

let username = ref("");
let description = ref("");

onMounted(() => {
    const api_url = "https://app.fakejson.com/q/ipsgR0e0?token=dpQ9m4it4XS-5oTmIu1YlQ";
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
