<template>
  <!-- Profile Info -->
  <div class="bg-white rounded-xl p-5">
    <!-- Profile Info Header -->
    <div class="flex items-center justify-between">
      <h2 class="font-bold text-xl md:text-2xl text-black-500">
        Персональные данные
      </h2>
      <BaseButton
        variant="lightDanger"
        class="px-9 rounded-md gap-1 font-semibold hidden md:flex"
        @click="console.log('click')"
      >
        Выйти
        <i
          class="icon-logout text-xl w-5 h-5 flex items-center justify-center"
        ></i>
      </BaseButton>
    </div>
    <hr class="mt-2.5 h-px border-none bg-white-500" />
    <div
      class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-[1.5px] border-gray-500 max-md:mx-auto my-5"
    >
      <img
        src="/images/profile-user.png"
        alt=""
        class="object-cover w-full h-full"
      />
    </div>
    <div
      class="w-full h-auto md:border border-gray-400 rounded-lg flex md:flex-row flex-col md:items-center overflow-hidden gap-5 md:gap-0"
    >
      <div class="sm:w-1/3 h-full md:p-4 md:border-r border-gray-400">
        <h4 class="text-gray-100 font-semibold">Имя:</h4>
        <h4 class="text-black-500 font-semibold">Мухаммадамин</h4>
      </div>
      <div class="sm:w-1/3 h-full md:p-4 md:border-r border-gray-400">
        <h4 class="text-gray-100 font-semibold">Фамилия:</h4>
        <h4 class="text-black-500 font-semibold">Домлахонов</h4>
      </div>
      <div class="sm:w-1/3 h-full md:p-4">
        <h4 class="text-gray-100 font-semibold">Адрес:</h4>
        <h4 class="text-black-500 font-semibold">г.Фергана, Талабалар 22</h4>
      </div>
    </div>
    <BaseButton
      variant="primary"
      class="px-6 w-full md:w-auto rounded-md gap-1 font-semibold mt-4 ml-auto"
      @click="navigateTo('/profile/edit')"
    >
      <i class="icon-edit text-xl w-5 h-5 flex items-center justify-center"></i>
      Изменить
    </BaseButton>
    <BaseButton
      variant="lightDanger"
      class="px-9 rounded-md gap-1 font-semibold block md:hidden mt-3 w-full"
      @click="console.log('click')"
    >
      Выйти
      <i
        class="icon-logout text-xl w-5 h-5 flex items-center justify-center"
      ></i>
    </BaseButton>
  </div>
</template>
