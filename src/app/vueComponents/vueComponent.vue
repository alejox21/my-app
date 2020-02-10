
<template>
  <div style="border: 3px dashed green; padding: 5px; text-align:center; margin-top:2em;">
    <h3>I'm a demo Vue tag</h3>
      {{'this is a message: '+msg}}
    <br />

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
  data() {
    return {
      text:'',
      parentmessage: '',
      messages: []
    }
  },
  methods: {
    sendMessage() {
        this.messages.push(this.text);
        this.text = '';
    }
  }
};
</script>
