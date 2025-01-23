<template>
  <!-- Profile Edit -->
  <div class="bg-white rounded-xl p-5">
    <!-- Profile Edit Header -->
    <div class="flex items-center justify-between">
      <h2 class="font-bold text-xl md:text-2xl text-black-500">
        Персональные данные
      </h2>
    </div>
    <hr class="mt-2.5 h-px border-none bg-white-500" />
    <div class="flex items-center gap-4">
      <div
        class="w-16 h-16 md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-[1.5px] border-gray-500 max-md:mx-auto my-5"
      >
        <img
          src="/images/profile.png"
          alt=""
          class="object-cover w-full h-full"
        />
      </div>
      <BaseButton
        variant="outline"
        class="text-gray-200 font-semibold flex gap-1"
        ><i
          class="icon-edit text-xl w-5 h-5 flex items-center justify-center"
        ></i>
        Изменить фото</BaseButton
      >
    </div>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-0 justify-end">
      <BaseFormGroup
        id="name"
        :label="'Ф.И.О'"
        :label-style="'text-base !text-black-500'"
      >
        <BaseInput id="name" class="!border"/>
      </BaseFormGroup>
      <BaseFormGroup
        id="name"
        :label="'Адрес'"
        :label-style="'text-base !text-black-500'"
      >
        <BaseInput id="name" />
      </BaseFormGroup>
    </form>
    <div class="flex gap-4 mt-11 justify-end">
      <BaseButton
        variant="secondary"
        @click="navigateTo('/profile/edit')"
        class="text-sm text-red-500 !px-11 font-semibold"
      >
        Отменить
      </BaseButton>
      <BaseButton
        variant="primary"
        @click="navigateTo('/profile/edit')"
        class="!px-11 font-semibold"
      >
        Сохранить
      </BaseButton>
    </div>
  </div>
</template>
