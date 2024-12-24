<template>
  <ModalWrapper>
    <div class="flex items-center justify-center gap-4">
      <button
        class="active:scale-90 duration-200 ease-in-out bg-gray-100 rounded-md p-1.5 rotate-180 text-3xl text-gray-300 flex items-center justify-center w-11 h-11 hover:bg-white-default/[0.24]"
      >
        <i class="icon-left" />
      </button>
      <div class="flex flex-col gap-y-3">
        <div
          :style="{
            backgroundImage: `url(${image}),linear-gradient(180deg, #00000003, #090808)`,
            backgroundSize: 'cover',
          }"
          class="w-[220px] h-[350px] md:w-[292px] md:h-[500px] rounded-lg flex flex-col justify-end"
        >
          <div
            :style="{
              background: 'linear-gradient(180deg, #00000001, #090808)',
            }"
            class="flex flex-col gap-y-4 px-3 pb-3 pt-8 rounded-lg"
          >
            <p class="text-gray-500 text-[14px] font-medium">Yangiliklar</p>
            <h3
              class="font-proxima text-white-default font-medium text-lg leading-7"
            >
              Новогодние скидки от Tashkent Parfum
            </h3>
          </div>
        </div>
        <button
          class="py-2.5 px-5 rounded-lg bg-red-500 text-white-default active:scale-95 duration-200 ease-in-out"
        >
          Подробнее
        </button>
      </div>

      <button
        class="active:scale-90 duration-200 ease-in-out bg-gray-100 rounded-md p-1.5 text-3xl text-gray-300 flex items-center justify-center w-11 h-11 hover:bg-white-default/[0.24]"
      >
        <i class="icon-left" />
      </button>
    </div>
  </ModalWrapper>
</template>

<script setup>
defineProps({
  image: String,
  required: false,
});
</script>
