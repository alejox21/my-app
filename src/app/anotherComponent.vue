<template>
    <div style="border: 3px dashed green; margin-top:1em;">
        <h3>This is "anotherComponent" (vueComponent's child)!</h3>
            
            
            <transition-group name="bounce" tag="p">
                <span v-for="item in messages" v-bind:key="item">
                    {{item}}
                </span>
            </transition-group>
           
        <!-- <ul>
            <li v-for="item in messeges">
                {{item}}
            </li>
        </ul> -->
    </div>
</template>

<script>
    export default {
        props: {
            messages: [],
        },
        data(){
            return{
                messegesarr: [],
            }
        },
        created() {
            console.log(this.messages)
            // this.messeges.push(this.parentmessage);
            // alert(JSON.stringify(this.messeges));
        },
    }
</script>
<style>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
