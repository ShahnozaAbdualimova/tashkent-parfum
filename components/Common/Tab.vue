<template>
  <div class="font-bold flex bg-white-400 p-0.5 rounded-[10px] w-fit ">
    <button
      v-for="(tab, index) in tabs"
      :key="index"
      @click="selectTab(tab.value)"
      class="px-3 py-2 text-sm font-medium rounded-[10px] transition-all duration-300 ease-in-out"
      :class="{
        'bg-white shadow text-black-500': selectedTab === tab.value,
        'text-gray-200': selectedTab !== tab.value,
        'rounded-r': index === 0,
        'rounded-l': index === 1,
        'shadow-[0px_1px_8px_0px_rgba(5,5,5,0.30)]':selectedTab === tab.value
      }"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script setup>

const props = defineProps({
  modelValue: String,
  tabs: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const selectedTab = ref(props.modelValue || props.tabs[0]?.value);

const selectTab = (tabValue) => {
  selectedTab.value = tabValue;
  emit("update:modelValue", tabValue);
};
</script>

<style scoped>

</style>
