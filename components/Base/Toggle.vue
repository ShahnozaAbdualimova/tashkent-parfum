<template>
  <div
    @click="toggle"
    :class="[
      'w-11 h-6 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300',
      isOn ? 'bg-red-500' : 'bg-gray-400'
    ]"
  >
    <div
      :class="[
        'w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300',
        isOn ? 'translate-x-5' : 'translate-x-0'
      ]"
    ></div>
  </div>
</template>

<script setup>

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const isOn = ref(props.modelValue)

const toggle = () => {
  isOn.value = !isOn.value
  emit('update:modelValue', isOn.value)
}
</script>
