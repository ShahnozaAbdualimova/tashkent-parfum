<template>
  <button :class="computedClass" :type :disabled @click="handleClick">
    <i v-if="icon" :class="icon" class="text-2xl text-inherit"></i>
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'primary',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: undefined,
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
});

let iconPosition = props.iconPosition;

const computedClass = computed(() => {
  const baseClass =
    'px-4 py-2 rounded text-sm font-medium transition-all duration-300 flex items-center justify-center';

  const variantClass = {
    headeBtn: '',
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    catalogBtn:
      ' px-3 py-2 bg-dark-btn rounded-lg font-normal  text-white-default  hover:bg-dark-btn-hover hover:text-black-300 group',
    secondary:
      ' rounded-md transform transition-transform active:scale-95 bg-white-400  px-4 py-2.5 font-normal  text-black',
    secondaryGray:
      'bg-white-500 text-white-default  rounded-md  px-4 py-2.5 font-normal ',
    headerBtn: '',
    basketBtn:
      'rounded-md transform  transition-transform active:scale-95 bg-red-500 hover:shadow-[0_0_10px_1px_rgba(246,37,89,0.5)] w-full font-normal  text-white-default',
    lightDanger:
      ' rounded-md transform transition-transform active:scale-95 bg-red-950  px-4 py-2.5 font-normal  text-red-500',
    danger:
      ' rounded-md transform transition-transform active:scale-95 bg-red-500 hover:shadow-[0_0_10px_1px_rgba(246,37,89,0.5)]  px-4 py-2.5 font-normal  text-white-default',
    light:
      ' px-4 py-3 bg-transparent rounded-lg font-normal text-base text-white-default  hover:bg-white-default hover:text-black-300 group border border-white-default',
  };

  if (props.iconPosition === 'right') {
    iconPositionClass = 'flex-row-reverse';
  }

  const btnVariantClass = variantClass[props.variant];
  return [baseClass, btnVariantClass, iconPosition].join(' ');
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>
