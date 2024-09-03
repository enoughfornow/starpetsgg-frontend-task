<script setup lang="ts">

const classes = {
    button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded el-w-content',
}
</script>


<template>
    <button :class="classes.button">
        <slot/>
    </button>
</template>

