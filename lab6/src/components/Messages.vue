<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
    //import ref
    import { ref } from 'vue'
    //import reactive
    import { reactive } from 'vue'
    //import onMounted
    import { onMounted } from 'vue'

    //ref voor o.a. strings, reactive voor o.a. arrays

    let comments = reactive({ comments: [] });
    onMounted(() => {
      //make connection with messages api Ismaïl 
        let api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
        fetch(api_url)
            .then(response => response.json())
            .then(data => {
                comments.comments = data;
                comments.comments.reverse()
            });
    });

    const addVideo = () => {
        videos.push(title.value);
        console.log("ben ik hier?")
    }
</script>

<template>
  <div>
    <!-- title is variabele dat je in script kunt declareren -->
    <h1>Messages</h1>
    <ul>
        <!-- v-for: loop over een array in html -->

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
