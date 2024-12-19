<template>
  <div class="flex items-center justify-center space-x-6 h-24">
    <div
      v-for="(link, index) in links"
      :key="index"
      class="relative group overflow-hidden cursor-pointer"
    >
      <span
        class="block text-sm font-semibold text-gray-800 group-hover:translate-y-[-100%] transition-transform duration-300"
      >
        {{ link.title }}
      </span>
      <span
        class="absolute inset-0 text-sm font-semibold text-red-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"
      >
        {{ link.title }}
      </span>
    </div>
    <!-- add toolbar -->
  </div>
</template>

<script setup>
const links = [
  { title: "Красота" },
  { title: "Сумки" },
  { title: "Парфюмерия" },
  { title: "Уход за волосами" },
  { title: "Бытовая химия" },
  { title: "Мужской отдел" },
  { title: "Депиляция и эпиляция" },
  { title: "Дезодоранты и антиперспиранты" },
];
</script>

