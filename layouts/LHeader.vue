<template>
  <header class="p-4">
    <h1 class="text-xl font-semibold">Select Language</h1>
    <Dropdown
      :selectedValue="selectedLanguage"
      :options="languages"
      @update:selectedValue="setSelectedLanguage"
    />
  </header>
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
