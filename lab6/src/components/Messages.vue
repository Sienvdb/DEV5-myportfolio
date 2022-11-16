<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
    //import ref
    import { ref } from 'vue'
    //import reactive
    import { reactive } from 'vue'

    //ref voor o.a. strings, reactive voor o.a. arrays
    let title = ref("hellow");
    let videos = reactive(["video1", "video2", "video3"]);

    const addVideo = () => {
        videos.push(title.value);
        console.log("ben ik hier?")
    }
</script>

<template>
  <div>
    <!-- title is variabele dat je in script kunt declareren -->
    <h1>{{ title }}</h1>
    <ul>
        <!-- v-for: loop over een array in html -->
        <li v-for="video in videos">
            {{ video }}
        </li>
    </ul>

    <!-- TWO WAY BINDING: docs: reactivity fundamentals-->
    <input type="text" v-model="title">

    <!-- @click = input + hi:title terug leegmaken en veranderen in hallo-->
    <!--<button @click="title = 'hello'">Change title</button> -->

    <!-- als geklikt dan functie addVideo aanroepen -->
    <button @click="addVideo">Change title</button>
    
  </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
</style>
