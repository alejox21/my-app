
function vueReady() {
    const MyVueWebComp = {
        props: ['msg'],
        template: `
            <div style="border: 3px dashed green; padding: 5px">
            I am my-vue-web-comp.<br>
            Value received via "msg" prop: {{ msg }}<br>
            <input v-model="text"><button @click="addText">Type something and click me</button>
            <div v-for="t in texts">
                Text: {{ t }}
            </div>
            </div>
            `,
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
        },
        mounted() {
            alert('Hello from the Vue side!');
        }
    };
    Vue.customElement('my-vue-web-comp', MyVueWebComp);

    // var app = new Vue({
    //     el: '#app',
    //     data: {
    //       message: 'Hello Vue!2'
    //     },
    //     template:{

    //     }
    //   })

    // Vue.component('button-counter', {
    //     data: function () {
    //         return {
    //         count: 0
    //         }
    //     },
    //     template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
    // })
}
