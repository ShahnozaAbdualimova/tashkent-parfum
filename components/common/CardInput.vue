<template>
  <Input
    placeholder="XXXX XXXX XXXX XXXX"
    v-model="cardNumber"
    :mask="cardMask"
    :error="hasError"
  />
</template>

<script setup>
const cardNumber = ref('');
const hasError = ref(false);

// Маска для форматирования номера карты
const cardMask = (value) => {
  return value
    .replace(/\D/g, '') // Удаляем всё, кроме цифр
    .replace(/(\d{4})(?=\d)/g, '$1 '); // Форматируем каждые 4 цифры
};
</script>
