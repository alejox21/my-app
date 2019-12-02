
<template>
  <div style="border: 3px dashed green; padding: 5px; text-align:center">
    <h3>I'm a Vue tag</h3>
    {{'this is msg: '+msg}}
    <br />

    <!-- <input style="padding: 0.5em; font-size:1em;" v-model="text" /> -->

    <!-- <button style="background:green; color:white; padding: 0.5em; font-size:1em;" @click="addText">Send a message to the child</button> -->

    <!-- <div v-for="t in texts">Text: {{ t }}</div> -->
    <input style="font-size:1.2em;" type="text" class="form-control" id="alt-image" v-model="text">
    <button style="font-size:1.2em; background:green; color:white;" @click="sendMessage" class="btn btn-info">Send message to son</button>
    
    <another-component :messages="messages" :key="messages.length"></another-component>

  </div>
</template>

<script>
import anotherComponent from "./anotherComponent.vue";

export default {
  props: [
    'msg'
  ],
  components: {
    anotherComponent
  },
  created() {
    // alert('Hello from the Vue side!');
  },
  data() {
    return {
      text:'',
      parentmessage: '',
      messages: []
    }
  },
  methods: {
    sendMessage() {
        // this.parentmessage = this.text;
        this.messages.push(this.text);
        this.text = '';
    }
  }
};
</script>
