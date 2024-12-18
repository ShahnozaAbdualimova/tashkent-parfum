<template>
    <div>
        <!-- <LoyautHeader /> -->
        <BaseCard :items="categoryName" class="px-32">
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
    id: "paarfumery",
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
]

</script>

<style scoped>

</style>