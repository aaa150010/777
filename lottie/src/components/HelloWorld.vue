<template>
  <div>
      <slot name="scopeProps" :title="title"></slot>
  </div>
</template>
<script setup>
import {ref} from "vue";

const title = ref('testing')



</script>