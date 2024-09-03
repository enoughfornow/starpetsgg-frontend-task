<script setup lang="ts">

const classes = {
    container: 'max-w-1200 min-h-900 mx-auto border-2 mt-5',
    header: '',
    content: 'flex items-center justify-center pt-20'
}

</script>

<template>
    <div :class="classes.container">
     <div :classes.header>
           <slot name="header"/>
     </div>
        <div :class="classes.content">
            <slot name="content"/>
        </div>
    </div>
</template>