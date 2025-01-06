<template>
  <div class="header sticky top-0 left-0 z-20 w-full bg-white">
    <header
      class="container mx-auto w-full py-4 flex items-center justify-between"
    >
      <div class="flex gap-8 items-center">
        <i
          class="icon-list block lg:hidden text-2xl font-bold"
          @click="openMenyuList"
        ></i>
        <CommonLogo type="light" />
        <div class="flex items-center gap-4">
          <BaseButton
            class="hidden lg:flex font-proxima px-3 bg-dark-btn rounded-lg font-normal text-sm text-white-default duration-300 hover:bg-dark-btn-hover hover:text-black-300 group"
            @click="openList"
          >
            <i
              class="icon-list text-2xl text-white-default duration-300 group-hover:text-black-200"
            ></i>
            Каталог
          </BaseButton>
          <div
            class="hidden lg:flex items-center px-2 bg-[#F2F3F5] text-[#6F6F6F] rounded-lg"
          >
            <div class="w-7 h-full d-flex items-center justify-center">
              <i class="icon-search"></i>
            </div>
            <BaseInput
              type="text"
              class="w-[436px] bg-[#F2F3F5] outline-none"
              placeholder="Поиск"
            />
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
      <BaseButton @click="showModal = !showModal" type="button" class="hidden lg:flex">
        <i class="icon-login text-[24px]"></i>
        Войти
      </BaseButton>
    </header>
    <div class="px-5 py-5 bg-white flex lg:hidden">
      <div class="w-full flex items-center bg-white-400 text-[#6F6F6F] rounded-lg">
        <div class="w-7 h-full flex items-center justify-center">
          <i class="icon-search"></i>
        </div>
        <BaseInput type="text" placeholder="Поиск" />
      </div>
    </div>
    <LayoutNavbar />

    <ModalAuthLogin v-if="showModal" :isVisible="showModal" @closeModal="closeModal">
    </ModalAuthLogin>

    <!-- Catalog list section -->
    <CommonCatalogList v-if="openCatalogList" />
    <CommonMenuList
      v-if="openMenuList"
      @close-menu="openMenuList = false"
      class="lg:hidden"
    />
  </div>
</template>

<script setup>
const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openMenuList = ref(false);

const openCatalogList = ref(false);

const openList = () => {
  return openCatalogList;
};

const openMenyuList = () => {
  openMenuList.value = !openMenuList.value;
  return openMenuList;
};
</script>

<style scoped>
.header {
  filter: drop-shadow(0 8px 44px rgba(56, 56, 56, 0.12));
}
</style>
