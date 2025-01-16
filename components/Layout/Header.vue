<template>
  <div class="header sticky top-0 left-0 z-20 w-full bg-white">
    <header
      class="px-4 lg:container mx-auto w-full py-4 flex items-center justify-between"
    >
      <div class="flex gap-8 items-center">
        <i
          class="icon-list block lg:hidden text-2xl font-bold"
          @click="openMenyuList"
        ></i>
        <NuxtLink to="/"><CommonLogo type="light" /></NuxtLink>

        <div class="flex items-center gap-4">
          <BaseButton
            class="hidden lg:flex"
            variant="catalogBtn"
            @click="handleCatalog"
          >
            <i
              class="icon-list text-2xl text-white-default duration-300 group-hover:text-black-200"
            ></i>
            Каталог
          </BaseButton>
          <div
            class="hidden lg:flex items-center bg-[#F2F3F5] text-[#6F6F6F] rounded-lg"
          >
            <div class="w-8 h-full flex items-center justify-center">
              <i class="icon-search text-xl"></i>
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
        <NuxtLink to="/basket">
          <div
            class="flex flex-col items-center cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"
          >
            <i class="text-2xl icon-basket"></i>
            <p class="text-xs hidden lg:block">Корзина</p>
          </div>
        </NuxtLink>
        <div
          class="flex flex-col items-center gap-1 cursor-pointer text-[#6F6F6F] hover:text-red-500 transition-all duration-300 ease-in"
        >
          <i class="text-xl icon-heart"></i>
          <p class="text-xs hidden lg:block">Избранные</p>
        </div>
      </div>
      <BaseButton
        @click="showModal = !showModal"
        type="button"
        class="hidden lg:flex"
      >
        <i class="icon-login text-[24px]"></i>
        Войти
      </BaseButton>
    </header>
    <div class="px-5 py-5 bg-white flex lg:hidden">
      <div
        class="w-full flex items-center bg-white-400 text-[#6F6F6F] rounded-lg"
      >
        <div class="w-7 h-full flex items-center justify-center">
          <i class="icon-search"></i>
        </div>
        <BaseInput type="text" placeholder="Поиск" />
      </div>
    </div>

    <LayoutNavbar />

    <ModalAuthWrapper
      v-if="showModal"
      :isVisible="showModal"
      @closeModal="closeModal"
    />

    <!-- Catalog list section -->
    <CommonCatalogList :isCatalogOpen />
    <CommonMenuList
      v-if="openMenuList"
      @close-menu="openMenuList = false"
      class="lg:hidden"
    />
    <!-- <CommonMenuList
      class="lg:hidden"
    /> -->
    <Teleport to="body">
      <div
        class="w-full px-4 py-2 text-gray-100 bg-white fixed bottom-0 flex justify-between lg:hidden border-t border-gray-500 z-10"
      >
        <NuxtLink to="#" class="flex flex-col items-center">
          <i class="icon-home text-3xl"></i>
          <h5 class="text-sm">Home</h5>
        </NuxtLink>
        <NuxtLink to="#" class="flex flex-col items-center">
          <i class="icon-home text-3xl"></i>
          <h5 class="text-sm">Home</h5>
        </NuxtLink>
        <NuxtLink to="#" class="flex flex-col items-center">
          <i class="icon-home text-3xl"></i>
          <h5 class="text-sm">Home</h5>
        </NuxtLink>
        <NuxtLink to="#" class="flex flex-col items-center">
          <i class="icon-home text-3xl"></i>
          <h5 class="text-sm">Home</h5>
        </NuxtLink>
        <NuxtLink to="#" class="flex flex-col items-center">
          <i class="icon-contact text-3xl"></i>
          <h5 class="text-sm">profile</h5>
        </NuxtLink>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
const { hideOverflow, showOverflow } = useOverflow();

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};

const openMenuList = ref(false);

const isCatalogOpen = ref(false);

const handleCatalog = () => {
  isCatalogOpen.value = !isCatalogOpen.value;

  if (isCatalogOpen.value) {
    hideOverflow();
  } else {
    showOverflow();
  }
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
