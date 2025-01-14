<template>
  <BaseInput :type="inputPhone" placeholder="(___) ___-__-__" v-model="model">
    <template #prefix>
      <span
        class="px-3 py-2.5 bg-gray-400 text-black-500 text-base font-normal rounded-l-lg"
      >
        +998
      </span>
    </template>
  </BaseInput>
</template>

<script setup>
defineProps({
  placeholder: {
    type: String,
    required: true,
  },
});

const inputPhone = ref('String');

const model = defineModel();
</script>
