<template>
  <div class="bg-white rounded-xl p-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
    <NuxtLink
      v-for="instruction in instructions"
      :key="instruction.id"
      :to="`/profile/instruction/${instruction.id}`"
      class="bg-white-400 p-2 rounded-xl group"
    >
      <h2
        class="text-sm font-bold m-2 mb-4 text-black-500 group-hover:text-red-500 transition-300"
      >
        Регистрация в приложения
      </h2>
      <div class="bg-white px-3 py-2 rounded-lg">
        <p class="text-black-500 text-xs font-semibold mb-2">
          Регистрация состоит из 3-х разделов, на 1-м этапе вы вводите личную
          информацию (Ф.И.О, номер телефона и адрес проживания)
        </p>
        <span
          class="flex items-center gap-1 text-xs group-hover:text-red-500 transition-300"
          >Подробнее
          <i
            class="icon-left flex items-center text-red-500 justify-center scale-0 group-hover:scale-100 w-5 h-5 transition-300"
          ></i
        ></span>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface InstructionItems {
  id: number;
  title: string;
  description: string;
}

const instructions: InstructionItems[] = reactive([
  {
    id: 1,
    title: 'Регистрация в приложения',
    description:
      'Регистрация состоит из 3-х разделов, на 1-м этапе вы вводите личную информацию (Ф.И.О, номер телефона и адрес проживания)',
  },
  {
    id: 2,
    title: 'Регистрация в приложения',
    description:
      'Регистрация состоит из 3-х разделов, на 1-м этапе вы вводите личную информацию (Ф.И.О, номер телефона и адрес проживания)',
  },
  {
    id: 3,
    title: 'Регистрация в приложения',
    description:
      'Регистрация состоит из 3-х разделов, на 1-м этапе вы вводите личную информацию (Ф.И.О, номер телефона и адрес проживания)',
  },
  {
    id: 4,
    title: 'Регистрация в приложения',
    description:
      'Регистрация состоит из 3-х разделов, на 1-м этапе вы вводите личную информацию (Ф.И.О, номер телефона и адрес проживания)',
  },
]);
</script>
