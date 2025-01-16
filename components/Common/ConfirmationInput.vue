<template>
  <div class="flex space-x-2">
    <input
      v-for="(digit, index) in otp"
      :key="index"
      :ref="(el) => (inputRefs[index] = el)"
      :value="digit"
      @input="onInput($event, index)"
      @keydown="onKeydown($event, index)"
      type="text"
      maxlength="1"
      pattern="\d*"
      class="border border-gray-300 p-2 text-center w-10 h-10 rounded-md"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const otp = ref(Array(6).fill(''));

const inputRefs = ref([]);

const onInput = (event, index) => {
  const value = event.target.value.replace(/\D/g, '');

  if (value) {
    otp.value.splice(index, 1, value);
    if (index < 5) inputRefs.value[index + 1]?.focus();
  }
};

const onKeydown = (event, index) => {
  switch (event.key) {
    case 'Backspace':
      if (!otp.value[index] && index > 0) {
        inputRefs.value[index - 1]?.focus();
      } else {
        otp.value.splice(index, 1, '');
      }
      break;
    case 'Delete':
      if (otp.value[index]) {
        otp.value.splice(index, 1, '');
      } else if (index > 0) {
        inputRefs.value[index - 1]?.focus();
        return;
      }
      break;
    case 'ArrowLeft':
      if (index > 0) inputRefs.value[index - 1]?.focus();
      break;
    case 'ArrowRight':
      if (index < 5) inputRefs.value[index + 1]?.focus();
      break;
  }
};

onMounted(() => {
  inputRefs.value[0]?.focus();
});
</script>

<style scoped>
input {
  font-size: 1.5rem;
  text-align: center;
}
</style>
