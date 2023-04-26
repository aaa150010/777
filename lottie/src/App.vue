<template>
<div @mousemove="onMousemove" class="movearea" :style="{ backgroundColor: `hsl(${x}, 80%, 50%,0.8)` }">
    <p>Move your mouse across this div...</p>
    <p>x: {{ x }}</p>
</div>
</template>
<script setup>
import {ref} from "vue";

const x = ref(0)
const onMousemove =(e) =>{
    console.log(e)
    x.value = e.clientX
}
</script>
<style>
.movearea{
    transition:background-color 0.3s ease-in-out;
}
</style>