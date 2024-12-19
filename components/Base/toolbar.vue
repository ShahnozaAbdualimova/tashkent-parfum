<template>
  <div class="flex items-center justify-center h-16 px-32">
    <div
      v-for="(link, index) in links"
      :key="index"
      class="relative group overflow-hidden cursor-pointer flex items-center"
    >
      <span
        class="block text-sm font-medium text-gray-800 group-hover:translate-y-[-100%] transition-transform duration-300"
      >
        {{ link.title }}
      </span>
      <span
        class="absolute inset-0 text-sm font-medium text-red-500 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"
      > 
        {{ link.title }}
      </span>
      <!-- Chiziqcha faqat oxirgi elementdan oldin ko'rinadi -->
      <div
        v-if="index !== links.length - 1"
        class="w-px h-4 bg-gray-300 mx-4"
      ></div>
    </div>
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
