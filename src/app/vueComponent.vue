
<template>

    <div style="border: 3px dashed green; padding: 5px">
    I am my-vue-web-comp.<br>
      Value received via "msg" prop: {{ msg }}<br>
      <input v-model="text"><button @click="addText">Type something and click me</button>
      <div v-for="t in texts">
        Text: {{ t }}
      </div>
      <another-component></another-component>
    </div>

</template>

<script>
import anotherComponent from './anotherComponent.vue';

export default {

    props: ['msg'],

    components:{
        anotherComponent
    },
    created(){
        alert('Hello from the Vue side!');
    },
    data() {
        return {
            text: '',
            texts: []
        };
    },
    methods: {
        addText() {
            this.texts.push(this.text);
            this.text = '';
        }
    }
}
</script>
