<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UIButton } from '@/ui'


const classes = {
    root: 'flex items-center justify-between p-4 bg-gray-800 text-white',
}

const router = useRouter()


function goToHome (text: string) {
  text === 'Главная' ? router.push({ path: '/' }) : router.push({ path: '/convert' })
}


</script>

<template>
  <header :class="classes.root">
    <UIButton @click="goToHome('Главная')">Главная</UIButton>
    <UIButton @click="goToHome('Конвертация')">Конвертация</UIButton>
  </header>
</template>

