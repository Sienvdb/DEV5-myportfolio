<!-- setup: deel overnemen van options vue, minder schrijven, minder omslachtig-->
<script setup>
  //import videoPlayer
  import VideoPlayer from './components/VideoPlayer.vue'
  //import videoDetails
  import VideoDetails from './components/VideoDetails.vue'
  //import messages
  import Messages from './components/Messages.vue'
</script>

<template>
  <div class="app">
    <div>
      <VideoPlayer />
    </div>
    <div>
      <VideoDetails/>
      <Messages/>
    </div>
  </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
 .app{
  display: grid;
  grid-template-columns: 8fr 4fr;
 }
</style>
