<script setup lang="ts">
import  WHeader  from 'widgets/header'
import { UILayout } from '@/ui'



</script>
<template>
    <UILayout>
        <template #header>
            <WHeader />
        </template>

        <template #content>
            <div>content</div>
        </template>
    </UILayout>
</template>



<style>
 @import '@/styles/variables';
* {
  width: 100%;
  /* font-family: "Spectral SC","Spectral SC" */
}
html {
  font-size: 4px;
}
body {
  background: #E8E6E6;
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