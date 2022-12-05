<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
    import 'animate.css';

    //import onmounted
    import { ref, reactive, onMounted } from 'vue'

    //let src = "https://vue-3-tiktok.vercel.app/video1.mp4"
    let src = ref("");
    let videos = reactive({videos: []});
    let animation = ref('');

    //onmounted
    onMounted(() => {
        let apiUrl = "https://app.fakejson.com/q/ipsgR0e0?token=dpQ9m4it4XS-5oTmIu1YlQ"
        //fetch
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                src.value = data.videos[0].video;
                videos.videos = data.videos;
            })
    });

    const nextVideo = () => { 
        animation.value = 'animate__fadeOut';
        setTimeout(() => {
            src.value = videos.videos[1].video;
            animation.value = 'animate__fadeIn';
        }, 1000);
    };

    const previousVideo = () => { 
        animation.value = 'animate__fadeOut';
        setTimeout(() => {
            src.value = videos.videos[0].video;
            animation.value = 'animate__fadeIn';
        }, 1000);
    };

    /* TRY 1
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

    html
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
    
    */
</script>

<template>
    <div class="background__fix">
        <div class="video background">
            <div class="controls controls__next">
                <a @click.prevent="nextVideo" href="#" >⬇</a>
            </div>
            <div class="controls controls__previous">
                <a @click.prevent="previousVideo" href="#">⬆</a>
            </div>
            <video :src="src" controls autoplay :class="animation" class="animate__animated">
                <!-- zorgt dat die uit een variabele kan halen?? v-bindsrc is :src-->
            </video>
        </div>
    </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
    .video{
        position: relative;
    }
    .controls{
        position: absolute;
        right: 2em;
        transform: translate(-30%, -30%);
        scale: 2;
        z-index: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-decoration: none;
    }

    a{
        text-decoration: none;
    }

    .controls__next{
        top: 52%;
    }

    .controls__previous{
        top: 48%;
    }

    .background {
        background-color: darkgray;
        background-size: cover;
        text-align: center;
        position: relative;
    }

    .background__fix{
        width: 65%;
        position: fixed
    }

</style>
