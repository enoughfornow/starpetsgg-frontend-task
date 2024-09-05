<script setup lang="ts">
import { useRouter } from 'vue-router'



const router = useRouter()

function toHome () {
    router.push({ path: '/' })
}

const classes = {
    root: 'flex items-center justify-center pt-20 m-0 m-auto',
    text: 'font-montserrat font-size-30 text-black',
}

</script>

<template> 
        <div :class="classes.root">
            <p 
                :class="classes.text">
            404 not found
            </p>
            <p 
                 @click="toHome"
                :class="classes.text"> 
            < Back to home
            </p>
        </div>
</template>