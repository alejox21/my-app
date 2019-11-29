
<template>
  <div style="border: 3px dashed green; padding: 5px; text-align:center">
    <h3>I'm a Vue tag</h3>
    <br />

    <input style="padding: 0.5em; font-size:1em;" v-model="text" />

    <button style="background:green; color:white; padding: 0.5em; font-size:1em;" @click="addText">Send a message to the child</button>

    <div v-for="t in texts">Text: {{ t }}</div>

    <hr>

    <div>
      <another-component :parentData="{msg: 'this is a message from the parent vue component'}"></another-component>

    </div>
  </div>
</template>

<script>
import anotherComponent from "./anotherComponent.vue";

export default {
  props: ["msg"],

  components: {
    anotherComponent
  },
  created() {
    // alert('Hello from the Vue side!');
  },
  data() {
    return {
      text: "",
      texts: []
    };
  },
  methods: {
    addText() {
      this.texts.push(this.text);
      this.text = "";
    }
  }
};
</script>
