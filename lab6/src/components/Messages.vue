<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
    //import ref
    import { ref } from 'vue'
    //import reactive
    import { reactive } from 'vue'
    //import onMounted
    import { onMounted } from 'vue'

    //ref voor o.a. strings, reactive voor o.a. arrays
    let title = ref("hellow");
    let comments = reactive({comment: []});

    onMounted(() => {
    const api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
    fetch(api_url)
        .then(res => res.json())
        .then(data => {
          console.log(data);
          console.log(comments)
          comments.comment = data[0];
          //messageText.value = data.messages[0].text;
        })
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
        <li v-for="comment in comments"  >
            {{ comment.user }}
            <p>hallo</p>
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
