<script setup lang="ts">
import WHeader from 'widgets/header'
import WCurrencyExchangeRate from 'widgets/currency-exchange-rate'
import { UILayout} from '@/ui'


</script>

<template>
    <UILayout>
        <template #header>
            <WHeader />
        </template>

        <template #content>
            <WCurrencyExchangeRate/>
        </template>
    </UILayout>
</template>