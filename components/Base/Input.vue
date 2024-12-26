<template>
  <div class="base-input-wrapper">
    <label v-if="label" :for="inputId" class="base-input-label">
      {{ label }}
    </label>
    <input
      v-bind="$attrs"
      :type="type"
      :id="inputId"
      :class="inputClasses"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);

const props = defineProps({
  size: { type: String, default: 'md' }, //  'sm', 'md', 'lg', 'xl'
  type: { type: String, default: 'text' }, //  'text', 'email', 'password'
  label: { type: String, default: '' },
  placeholder: { type: String, default: '' },
  modelValue: String,
});

const inputId = `base-input-${Math.random().toString(36).substring(2, 15)}`;

const inputClasses = computed(() => ({
  'base-input': true,
  [`base-input-${props.size}`]: true,
}));
</script>

<style scoped>
.base-input-wrapper {
  @apply flex flex-col gap-2;
}

.base-input-label {
  @apply text-sm leading-[18.2px] text-gray-200 font-bold;
}

.base-input {
  @apply w-full p-2  bg-white-500 rounded-lg outline-none  placeholder-gray-100 focus:outline-1 focus:outline-gray-100 duration-200 ease-in-out;
}

.base-input-sm {
  @apply h-8 text-sm;
}

.base-input-md {
  @apply h-10 text-base;
}

.base-input-lg {
  @apply h-12 text-lg;
}

.base-input-xl {
  @apply h-14 text-xl;
}
</style>
