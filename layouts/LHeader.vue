<template>
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
  </div>
</template>

<script>
import Dropdown from '~/components/base/dropdown.vue';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      selectedLanguage: 'O‘zbekcha',
      languages: ['O‘zbekcha', 'Русский', 'English'],
    };
  },
  methods: {
    setSelectedLanguage(language) {
      this.selectedLanguage = language;
    },
  },
};
</script>
