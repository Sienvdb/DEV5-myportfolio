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

    
    const addComment = () => {
        let api_url = "https://lab5-p379.onrender.com/api/v1/messages/";
        let comment = document.querySelector(".input__text").value;
        let data = {
            "id": comments.comments.length + 1,
            "user": "Sien",
            "text": comment,
        };
        fetch(api_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
              console.log(data);
              comments.comments.push(data);
              document.querySelector(".input__text").value = "";
            });
            comments.comments.unshift(data);

    };


</script>

<template>
  <div class="videoComments">
    <h3>Comments</h3>
        <div>
        <input class="input__text" type="text" placeholder="Type here">
        <button class="button" @click ="addComment" type="submit">SEND</button>
      </div>
    <div class=".comments__list">
      <ul>
          <li v-for="comments in comments.comments" :key="comments.id" class="comments">
              <p class="comment__username">{{ comments.user }}</p>
              <p class="comment__text">{{ comments.text }}</p>
          </li>
      </ul>

    </div>    
  </div>
</template>

<!-- scoped: enkel in dit bestand/ component van toepassing-->
<style scoped>
  .button{
    background-color: #39BC62;
    padding: 0.5em;
    border: none;
    border-radius: 0.21em;
  }
.input__text{
      width: 80%;
        padding: 0.5em;
        margin: 0.5em;
        border: 1px solid #ccc;
        font-family: 'Roboto', sans-serif;
    }
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

    .comments__list{
      overflow-y: hidden;
    }

    .comment__username{
      margin: 0;
        font-weight: bold;
    }

    .comment__text{
      margin: 0;
    }
</style>
