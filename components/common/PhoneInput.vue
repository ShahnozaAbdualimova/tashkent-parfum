<template>
  <Input
    placeholder="(___) ___-__-__"
    v-model="phoneNumber"
    :mask="phoneMask"
    :error="hasError"
  >
    <template #prefix>
      <div
        class="flex items-center px-3 bg-gray-100 text-gray-500 rounded-l-lg"
      >
        +998
      </div>
    </template>
  </Input>
</template>

<script setup>
const phoneNumber = ref('');
const hasError = ref(false);

// Маска для форматирования номера телефона
const phoneMask = (value) => {
  return value
    .replace(/\D/g, '') // Удаляем всё, кроме цифр
    .replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, '($1) $2-$3-$4'); // Форматируем как (XX) XXX-XX-XX
};
</script>
