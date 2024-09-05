<script setup lang="ts">
import { UIIcon, UISelectTypes } from '@/ui';

interface Props {
    value: string,
    currency: UISelectTypes.ESelectTypes,
    selectedCurrency: UISelectTypes.ESelectTypes
}

 defineProps<Props>()

const classes = {
    container: 'flex items-center justify-between gap-2',
    text: 'font-montserrat font-size-20 flex items-center el-w-content',
    icon: 'el-w-10 el-h-10 bg-color-gray m-4',
}


</script>

<template>
    <div
        v-if="+value"
        :class="classes.container" > 
            <UIIcon 
                :name="selectedCurrency" 
                :class="classes.icon"
                />    
            <p :class="classes.text">
               1 {{ selectedCurrency.toUpperCase() }} = {{ value }} {{ currency.toUpperCase() }}
            </p>
            <UIIcon 
                :name="currency" 
                :class="classes.icon"
                />   
    </div>
</template>