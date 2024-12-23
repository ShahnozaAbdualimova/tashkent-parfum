<template>
<<<<<<< HEAD
  <div>hi</div>
=======
    <div>
      <Input
        v-model="username"
        placeholder="Enter your username"
        :error="hasError"
        inputClass="bg-white"
      >
        <template #prefix>
          <span class="mr-2">👤</span>
        </template>
        <template #suffix>
          <span v-if="hasError" class="text-red-500">!</span>
        </template>
      </Input>

      hi
    </div>
  </template>
  
  <script setup>
  import Input from '@/components/Input.vue';
  import { ref } from 'vue';
  
  const username = ref('');
  const hasError = ref(false);
  </script>
  <header class="p-4">
    <h1 class="text-xl font-semibold">Select Language</h1>
    <Dropdown
      :selectedValue="selectedLanguage"
      :options="languages"
      @update:selectedValue="setSelectedLanguage"
    />
  </header>
>>>>>>> 59ca00bb4a6b5c62613996cc975851540c4511a7
</template>

<script>
export default {

}
</script>
<<<<<<< HEAD

<style>

</style>
=======
>>>>>>> 59ca00bb4a6b5c62613996cc975851540c4511a7
