<script setup lang="ts">
import PHome from '../pages/home'
import PConvert from '../pages/convert'
import { useRoute } from 'vue-router'



const route = useRoute()

</script>
<template>
    <PHome v-if="route.path === '/'" />
    <PConvert v-if="route.path === '/convert'" />
</template>



<style>
 @import '@/styles/variables';
* {
  width: 100%;
  /* font-family: "Spectral SC","Spectral SC" */
  margin: 0;
  padding: 0;
}
html {
  font-size: 4px;
}
body {
  background: var(--color-gray);
  font-size: 4rem;
  overflow: hidden;
}
input {
  outline: none;
}
button {
  border: none
}
</style>