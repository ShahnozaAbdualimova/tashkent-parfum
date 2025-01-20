<template>
  <div
    class="w-full relative h-auto py-2.5 px-3 bg-white-400 rounded-lg cursor-pointer mt-2 select-none flex justify-between items-center gap-2"
    @click="handleClick"
  >
    <h1
      class="text-black-500 font-proxima leading-[130%] relative "
      :class="
        selectedOptions === null && !locationDistrict  ? 'text-gray-100' : ''
      "
    >
      {{ locationDistrict || locationCity ? locationDistrict || locationCity : selectedOptionsText }}
    </h1>
    <i
      class="text-sm text-gray-400 icon-chevron-down"
      :class="{ rotated: isRotated }"
    ></i>
    <Transition name="dropdown">
      <ul
        class="font-proxima text-black-500 text-sm font-medium max-h-64 overflow-y-auto mt-2 absolute z-50 rounded-lg flex flex-col w-full top-10 left-0 drop-show h-auto bg-white shadow-[0_4px_36px_rgba(56,56,56,0.16)]"
        v-if="show"
      >
        <h2>
          {{ i[labelKey] }}
        </h2>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
const show = ref(false);
const isRotated = ref(false);

const handleClick = () => {
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
  placeholder: {
    type: String,
    default: 'Select an option:',
  },
  defaultValue: {
    type: Object,
    default: undefined,
  },
  locationDistrict: {
    type: String,
    required: false,
  },
  locationCity: {
    type: String,
    required: false,
  },
});

const selectedOptions = defineModel();

watch(
  () => props.items,
  (newValue) => {
    if (newValue.length > 0 && !props.defaultValue) {
      selectedOptions.value = null;
    } else if (props.defaultValue) {
      selectedOptions.value = props.defaultValue;
    }
  },
  {
    immediate: true,
  }
);

const selectedOptionsText = computed(() => {
  return selectedOptions.value
    ? selectedOptions.value[props.labelKey]
    : props.placeholder;
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
.dropdown-enter-active {
  transition: all 0.2s ease;
}

.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
