<template>
  <div class="relative inline-block">
    <button class="px-4 py-2 text-grey-100 rounded-lg focus:outline-none flex gap-2 items-center justify-center"
      @click="toggleDropdown">
      {{ selectedValue }}


      <svg :class="{ 'rotate-180': isOpen }" width="24" height="24" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5999 9.60001L11.9999 14.4L6.3999 9.60001" stroke="#6F6F6F" stroke-width="1.5"
          stroke-linecap="round" stroke-linejoin="round" />
      </svg>

    </button>
    <ul v-if="isOpen" class="absolute left-0 mt-2 w-full rounded-lg bg-white-default shadow-lg z-10">
      <li v-for="(option, index) in options" :key="index" :class="[
        getVariantClasses(option),
        index === 0 ? 'rounded-t-lg' : '',
        index === options.length - 1 ? 'rounded-b-lg' : '',
        index !== 0 && index !== options.length - 1 ? 'border-y border-gray-300' : '',
        selectedValue === option ? 'bg-red-100 text-black-500' : '', 
      ]" class="px-4 py-4 cursor-pointer hover:bg-white-200 text-xs text-grey-100" @click="selectOption(option)">
        {{ option }}
        <span v-if="selectedValue === option" class="ml-2 text-red-500">✔</span> 
      </li>

      <!-- <div v-if="index !== 0 && index !== options.length - 1" class="w-11/12 h-[1px] bg-gray-300 mx-auto block"></div> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    selectedValue: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.$emit('update:selectedValue', option);
      this.isOpen = false;
    },
    getVariantClasses(option) {
      switch (option) {
        case 'danger':
          return 'bg-red-500 text-white hover:bg-red-600';
        case 'secondary':
          return 'bg-gray-500 text-white hover:bg-gray-600';
        case 'default':
        default:
          return 'bg-white-default text-gray-800 hover:bg-gray-200';
      }
    },
  },
};
</script>
