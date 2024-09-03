<script setup lang="ts">

const classes = {
    container: 'relative h-100vh pr-1',
}

</script>

<template>
    <div :class="classes.container">
        <slot name="header"/>
        <slot name="content"/>
    </div>
</template>