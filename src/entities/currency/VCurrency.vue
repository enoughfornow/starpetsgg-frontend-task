<script setup lang="ts">

import { UIIcon } from '@/ui';
import { computed } from 'vue';

interface Props {
    currency?: number,
    selectedCurrency: string,
}

const props = defineProps<Props>()

const classes = {
    container: 'flex items-center gap-5',
    text: 'font-montserrat flex items-center el-w-content',
}

</script>

<template>
    <div :class="classes.container">
        <UIIcon 
        :key="selectedCurrency"
        :name="selectedCurrency"
        >
            <p :class="classes.text">
                <!-- {{ `1 ${selectedCurrency.toUpperCase()} = ${props.currency.toFixed(2)} ${props.secondCurrency.toUpperCase()}` }} -->
            </p>
        </UIIcon>
    </div>
</template>