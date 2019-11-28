
<template>
    
    <div>
        <h1>Que le den quendele!</h1>

        <another-component></another-component>
    </div>

</template>

<script>
import anotherComponent from './anotherComponent.vue';

export default {
    components:{
        anotherComponent
    },
    created(){
        alert('holanda');
    }
}
</script>