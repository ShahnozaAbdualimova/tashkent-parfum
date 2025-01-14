<template>
  <FormSelect
    id="example-select"
    :options="[
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' }
    ]"
    variant="outline"
    size="lg"
    wrapperClass="mb-4"
    selectClass="custom-class"
    v-model="selectedOption"
  >
    <template #prefix>
      <span class="text-sm text-gray-500">Choose:</span>
    </template>
    <template #suffix>
      <span class="text-sm text-gray-500">End</span>
    </template>
  </FormSelect>
</template>

<script setup>

const selectedOption = ref(null)
</script>
