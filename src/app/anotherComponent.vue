<template>

    <h2>This is "anotherComponent" (vueComponent's child)!</h2>
    
</template>

<script>
export default {
    props: {
        parentData: Object,
    },
    created(){
        //alert(this.parentData.msg);
    }
}
</script>
