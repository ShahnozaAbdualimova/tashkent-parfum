<template>
    <div class="w-full">
        <div class="w-full py-2 bg-gray-50 px-5 xl:px-32">
            <div class="w-full py-1 lg:flex justify-between hidden">
                <div class="flex gap-6">
                    <NuxtLink  class="w-auto h-auto flex items-center gap-2 cursor-pointer hover:text-red-500" to="tel:+998712007007">
                        <i class="icon-phone text-2xl text-gray-300"></i>
                        <span class="text-gray-600 text-xs">+998 (71) 200 70 07</span>
                    </NuxtLink>
                    <NuxtLink class="w-auto h-auto flex items-center gap-2 cursor-pointer hover:text-red-500" to="https://www.google.com/maps/dir/Inha+University+in+Tashkent,+Ziyolilar+Street,+Tashk[…]41.338525?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                        <i class="icon-adress text-2xl text-gray-300"></i>
                        <span class="text-gray-600 text-xs">Yunusobod, Ahmad Donish ko'chasi, 4/80</span>
                    </NuxtLink>
                </div>
                <div class="flex items-center gap-3">
                    <div class="flex gap-4 text-gray-400">
                        <NuxtLink to="">
                            <i class="icon-facebook cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"></i>
                        </NuxtLink>
                        <NuxtLink to="https://www.instagram.com/toshkent_parfum_/">
                            <i class="icon-instagram cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"></i>
                        </NuxtLink>
                        <NuxtLink to="https://t.me/toshkent_parfume">
                            <i class="icon-telegram cursor-pointer hover:text-red-500 transition-all duration-300 text-xl"></i>
                        </NuxtLink>
                    </div>
                    <Dropdown
                      :selectedValue="selectedLanguage"
                      :options="languages"
                      @update:selectedValue="setSelectedLanguage"
                    />
                </div>
            </div>
        </div>
        <header class="w-full py-4 px-5 xl:px-32">
            <div class="w-full flex items-center justify-between container mx-auto">
                <div class="flex  gap-8 ">
                    <CommonLogo />
                    <div class="flex items-center gap-4">
                        <BaseButton
                            class="font-proxima px-3 py-2 bg-dark-btn rounded-lg font-normal text-sm text-white-default duration-300 
                            hover:bg-dark-btn-hover hover:text-black-300 group hidden lg:flex"
                        >
                            <i
                                class="icon-list text-2xl text-white-default duration-300 group-hover:text-black-200"
                            ></i>
                            Каталог
                        </BaseButton>
                        <div class="hidden lg:block">
                            <div class="w-[400px] flex items-center px-2 bg-white-400 text-[#6F6F6F] rounded-lg ">
                                <div class="w-7 h-full d-flex items-center justify-center">
                                    <i class="icon-search"></i>
                                </div>
                                <BaseInput type="text" input-class=" bg-[#F2F3F5] outline-none" placeholder="Поиск" />
                            </div> 
                        </div>
                    </div>
                </div>
                <div class="flex gap-5">
                    <div 
                        class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"              
                    >
                        <i class="text-xl icon-box"></i>
                        <p class="text-xs hidden lg:block">Мои заказы</p>
                    </div>
                    <div 
                        class="flex flex-col items-center cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"              
                    >
                        <i class="text-2xl icon-basket"></i>
                        <p class="text-xs hidden lg:block">Корзина</p>
                    </div>
                    <div 
                        class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"              
                    >
                        <i class="text-xl icon-heart"></i>
                        <p class="text-xs hidden lg:block">Избранные</p>
                    </div>
                </div>
               <BaseButton
                    variant="danger"
                    type="button"
                    class="hidden lg:flex"
                ><i class="icon-login text-[24px] "></i>Войти
                </BaseButton>
            </div>
        </header>
        <div class="px-5 py-5 bg-gray-50">
            <div class="sm:block lg:hidden">
                <div class="w-full  flex items-center px-2 bg-white-400 text-[#6F6F6F] rounded-lg">
                    <div class="w-7 h-full d-flex items-center justify-center">
                        <i class="icon-search"></i>
                    </div>
                    <BaseInput type="text" input-class=" bg-[#F2F3F5] outline-none" placeholder="Поиск" />
                </div>
            </div>
        </div>

        <!-- create header -->
    </div>
</template>

<script>
import Dropdown from '~/components/base/dropdown.vue'; 

export default {
  components: {
    Dropdown, 
  },
  data() {
    return {
      selectedLanguage: 'O‘zbekcha', 
      languages: ['O‘zbekcha', 'Русский', 'English'], 
    };
  },
  methods: {
    setSelectedLanguage(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>