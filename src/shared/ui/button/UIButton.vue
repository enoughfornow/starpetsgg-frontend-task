<script setup lang="ts">

interface IEmit {
  (e: 'click'): void
}

const emit = defineEmits<IEmit>()

const classes = {
    button: 'cursor-pointer el-h-md font-spectral bg-color-black color-gray el-w-content p-2',
    text: 'font-spectral font-bold font-size-15',
}
</script>


<template>
    <button 
        type="button"
        :class="classes.button"
        @click="emit('click')">
            <p :class="classes.text">
                <slot/>
            </p>
    </button>
</template>

