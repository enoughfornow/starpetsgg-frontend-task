<script setup lang="ts">
import WHeader from 'widgets/header'
import WCurrencyConverter from 'widgets/currency-converter'
import { UILayout} from '@/ui'


</script>

<template>
    <UILayout>
        <template #header>
            <WHeader />
        </template>

        <template #content>
            <WCurrencyConverter/>
        </template>
    </UILayout>
</template>