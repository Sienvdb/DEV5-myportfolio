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
  <div class="videoComments">
    <ul>
          <li v-for="comments in comments.comments" :key="comments.id" class="comments">
              <p class="comment__username">{{ comments.user }}</p>
              <p class="comment__text">{{ comments.text }}</p>
          </li>
      </ul>
    
  </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
    .videoComments{
        padding: 0 1rem;
    }
    ul{
      padding-left: 0em;
      margin-left: 0em;
    }
    li{
        list-style: none;
    }
    .comments{
        padding: 1em;
        margin: 0.5em;
        border: 1px solid #ccc;
        font-family: 'Roboto', sans-serif;
    }

    .comment__username{
      margin: 0;
        font-weight: bold;
    }

    .comment__text{
      margin: 0;
    }
</style>
