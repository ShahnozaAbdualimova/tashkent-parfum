<template>
    <div class="dropdown-wrapper">
        <div class="dropdown-selected-option">
            
        </div>
        <div class="options-wrapper">
            <div 
                class="option"
                v-for="(option, index) in options"
                :key="index"
            >
            {{ option }}
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    options: {
        type:  Array,
        required: true
    }
})

</script>

<style lang="scss" scoped>

</style>