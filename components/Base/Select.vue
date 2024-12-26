<template>
  <div
    class="w-full relative h-auto py-2 px-3 border bg-[#E0E7FF]/40 text-black rounded-md cursor-pointer mt-1 select-none flex justify-between items-center gap-2"
    @click="handelClick"
  >
    <h1 class="text-black relative">
      {{ selectedOptionsText }}
    </h1>
    <i
      class="icon-chevron-down text-sm text-gray-400"
      :class="{ rotated: isRotated }"
    ></i>
    <ul
      class="mt-1 absolute z-10 rounded-md flex flex-col w-full top-10 left-0 drop-show h-auto border border-blue-100 bg-white drop-shadow-xl"
      v-if="show"
    >
      <li
        class="w-full h-auto py-2 px-3 border-b flex flex-col border-blue-100 duration-300 last:border-none cursor-pointer hover:bg-blue-50 transition-all 0.3s ease-in-out"
        v-for="(i, index) in items"
        :key="index"
        @click="onSelect(i)"
      >
        <h2>
          {{ i[labelKey] }}
        </h2>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const show = ref(false);
const isRotated = ref(false);

const handelClick = () => {
  toggleRotation();
  toggleShow();
};

const toggleRotation = () => {
  isRotated.value = !isRotated.value;
};

const toggleShow = () => {
  show.value = !show.value;
};

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  labelKey: {
    type: String,
    default: 'title',
  },
  valueKey: {
    type: String,
    default: 'id',
  },
  currensyKey: {
    type: String,
    default: 'currensy',
  },
  defaultValue: {
    type: Object,
    default: undefined,
  },
});

const selectedOptions = defineModel();

watch(
  () => props.items,
  (newValue) => {
    if (newValue.length > 0 && !props.defaultValue) {
      selectedOptions.value = newValue[0];
    } else if (props.defaultValue) {
      selectedOptions.value = props.defaultValue;
    }
  },
  {
    immediate: true,
  }
);

const selectedOptionsText = computed(() => {
  return selectedOptions.value?.[props.labelKey];
});

const onSelect = (i) => {
  selectedOptions.value = i;
  show.value = true;
};
</script>

<style scoped>
.rotated {
  transform: rotate(180deg);
}
</style>
