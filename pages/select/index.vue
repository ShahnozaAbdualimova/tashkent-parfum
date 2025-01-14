<template>
    <div>
      <h2>Select a Fruit</h2>
      <FormSelect
        v-model="selectedFruit"
        :options="fruitOptions"
        placeholder="Choose a fruit"
        @change="handleFruitChange"
      />
      <p v-if="selectedFruit">You selected: {{ selectedFruit }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';                                                                                                                    
  
  const fruitOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
    { value: 'date', label: 'Date' },
  ];
  
  const selectedFruit = ref('');
  
  const handleFruitChange = (option) => {
    console.log('Selected fruit:', option.label);
  };
  </script>
  