<script setup lang="ts">

interface Props {
    value: string,
    currency: string,
    selectedCurrency: string
}

 defineProps<Props>()

const classes = {
    container: 'flex items-center m-4',
    text: 'font-montserrat font-size-20 flex items-center el-w-content',
}


</script>

<template>
    <div
        v-if="+value"
        :class="classes.container" >     
            <p :class="classes.text">
               1 {{ selectedCurrency.toUpperCase() }} = {{ value }} {{ currency }}
            </p>
    </div>
</template>