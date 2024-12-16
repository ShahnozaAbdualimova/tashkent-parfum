<template>
    <div class="w-full">
        <div class="w-full py-3 bg-gray-50 px-32">
            <div class="w-full py-1 flex justify-between">
                <div class="flex gap-6">
                    <NuxtLink  class="w-auto h-auto flex items-center gap-2 cursor-pointer">
                        <i class="icon-phone text-2xl text-gray-300"></i>
                        <span class="text-gray-600 text-sm">+998 (71) 200 70 07</span>
                    </NuxtLink>
                    <div class="w-auto h-auto flex items-center gap-2">
                        <i class="icon-adress text-2xl text-gray-300"></i>
                        <span class="text-gray-600 text-sm">+998 (71) 200 70 07</span>
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex gap-4 text-gray-400">
                        <i class="icon-facebook cursor-pointer hover:text-red-500 transition-all duration-300 text-2xl"></i>
                        <i class="icon-instagram cursor-pointer hover:text-red-500 transition-all duration-300 text-2xl"></i>
                        <i class="icon-telegram cursor-pointer hover:text-red-500 transition-all duration-300 text-2xl"></i>
                    </div>
                    <BaseSelect :items="languages" class="border-none bg-transparent"/>
                </div>
            </div>
        </div>
        <header class="w-full py-4 px-32">
            <div class="w-full flex items-center justify-between container mx-auto">
                <div class="flex  gap-8 ">
                    <CommonLogo />
                    <div class="flex items-center gap-4">
                        <button class="flex gap-2 py-2 ps-2 pe-3 border rounded-lg text-sm catalog text-white hover:bg-gray-100">
                            <span class="icon-list text-2xl"></span>
                            Каталог
                        </button>
                        <div class="flex items-center gap-2 px-2 bg-[#F2F3F5] text-[#6F6F6F] rounded-lg">
                            <div class="w-7 h-7 d-flex items-center justify-center">
                                <i class="icon-search"></i>
                            </div>
                            <input type="text" class="w-[436px] py-2 bg-[#F2F3F5] outline-none" placeholder="Поиск">
                        </div> 
                    </div>
                </div>
                <div class="flex gap-5">
                    <div 
                        class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"
                        v-for="i of items"
                        :key="i"              
                    >
                        <i class="text-[20px]" :class="i.iconName"></i>
                        <p class="text-xs">{{ i.itemName }}</p>
                    </div>
                </div>
                <button 
                    class="text-sm flex justify-center items-center px-5 py-2.5 border rounded-lg bg-[#F62559] text-white hover:bg-red-500 transition-all duration-300"
                >
                    <i class="icon-login text-[24px]"></i>
                    Войти
                </button>
            </div>
        </header>
    </div>
</template>

<script setup>

const items = [
    {
        id: "order",
        itemName: "Мои заказы",
        iconName: "icon-box"
    },
    {
        id: "basket",
        itemName: "Корзина",
        iconName: "icon-basket"
    },
    {
        id: "like",
        itemName: "Избранные",
        iconName: "icon-heart"
    }
]

const languages = [
  {
    id: "uz",
    title: 'O`zbekcha',
  },
  {
    id: "ru",
    title: 'Русский',
  },
  {
    id: "en",
    title: 'English',
  },
]

</script>

<style scoped>
.catalog{
    background: linear-gradient(84.8deg, #383838 0%, #6F6F6F 131.39%);
}
</style>