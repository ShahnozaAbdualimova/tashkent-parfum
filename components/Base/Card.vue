<template>
    <RouterLink to="#" class="grid grid-cols-4 gap-y-4 gap-x-6 w-full p-4">
        <div 
            class="pt-4 ps-5 pb-4 bg-white rounded-xl flex justify-between w-auto h-auto border relative category-card hover:shadow-xl"
            v-for="i of items"
            :key="i"
        >
            <div class="flex flex-col gap-10 w-full">
                <h3 class="text-xl">{{ i.category }}</h3>
                <NuxtLink to="#" class="text-sm flex items-center gap-1 card-link opacity-0 transition-all duration-200 text-red-500 ">
                    Перейти
                    <i class="icon-left text-sm"></i>
                </NuxtLink>
            </div>
            <img :src="i.img" alt="#" class="absolute right-0 bottom-0 rounded-br-lg">
        </div>
    </RouterLink>
</template>

<script setup>

defineProps({
    items: {
        type: Object,
        required: true
    }
})

</script>

<style scoped>
.category-card :hover .card-link{
    opacity: 100;
}
</style>