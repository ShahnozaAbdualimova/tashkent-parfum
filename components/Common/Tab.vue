<template>
  <div class="font-bold flex bg-white-400 px-2 py-1 rounded-[10px] w-fit">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectTab(tab.value)"
      class="px-3 py-2 text-sm font-medium rounded-[10px] transition-all duration-300 ease-in-out"
      :class="{
        'bg-white  text-black-500 shadow-[0px_1px_8px_0px_rgba(5,5,5,0.30)] scale-105':
          selectedTab === tab.value,
        'text-gray-200': selectedTab !== tab.value,
        'rounded-r': index === 0,
        'rounded-l': index === 1,
      }"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: String,
  tabs: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);
const selectedTab = ref(props.modelValue || props.tabs[0]?.value);

const selectTab = (tabValue) => {
  if (selectedTab.value !== tabValue) {
    selectedTab.value = tabValue;
    emit('update:modelValue', tabValue);
  }
};

watch(
  () => props.modelValue,
  (newValue) => {
    if (newValue !== selectedTab.value) {
      selectedTab.value = newValue;
    }
  }
);
</script>

<style scoped>
button {
  transition:
    transform 0.2s ease-in-out,
    background 0.3s ease-in-out,
    box-shadow 0.3s ease-in-out;
}
</style>
``
