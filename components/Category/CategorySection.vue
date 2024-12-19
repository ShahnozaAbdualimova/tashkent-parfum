<template>
    <div>
        <!-- <LoyautHeader /> -->
        <BaseCard :items="categoryName" class="sm:px-5 xl:px-32 bg-gray-50">
          <slot />
        </BaseCard>
      </div>
</template>

<script setup>
const categoryName = [
  {
    id: "bestseller",
    category: "Бестселлеры",
    img: "/images/cards/bestsellers.svg"
  },
  {
    id: "parfumery",
    category:  "Парфюмерия",
    img: "/images/cards/parfumeria.svg"
  },
  {
    id: "hairs",
    category:  "Волосы",
    img: "/images/cards/hair.svg"
  },
  {
    id: "face",
    category:  "Лицо",
    img: "/images/cards/face.svg"
  },
  {
    id: "body",
    category:  "Тело и ванна",
    img: "/images/cards/body.svg"
  },
  {
    id: "mekaup",
    category:  "Макияж",
    img: "/images/cards/makeup.svg"
  },
  {
    id: "man",
    category:  "Мужчинам",
    img: "/images/cards/man.svg"
  },
  {
    id: "premium",
    category:  "Премиум",
    img: "/images/cards/premium.svg"
  },
  {
    id: "face",
    category:  "Лицо",
    img: "/images/cards/face.svg"
  },
  {
    id: "hairs",
    category:  "Волосы",
    img: "/images/cards/hair.svg"
  },
  {
    id: "premium",
    category:  "Премиум",
    img: "/images/cards/premium.svg"
  },
  {
    id: "mekaup",
    category:  "Макияж",
    img: "/images/cards/makeup.svg"
  },
]

</script>

<style scoped>

</style>