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
    Messages.vue
  </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
</style>
