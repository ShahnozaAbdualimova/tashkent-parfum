<template>
    <div 
        class="p-5 bg-white rounded-lg flex justify-between w-[278px] h-[128px] border"
        v-for="i of items"
        :key="i"
    >
        <h3>{{ i.categoryName }}</h3>
        <img :src="i.img" alt="#">
   </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    items: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>

</style>