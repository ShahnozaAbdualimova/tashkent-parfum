<template>
  <div
    class="bg-white w-[278px] border border-white rounded-xl overflow-hidden p-4 group cursor-pointer hover:shadow-xl transition-shadow duration-300"
  >
    <!-- logo -->
    <div class="flex items-center mb-4">
      <img
        :src="brand.avatar"
        alt="Brand-Logo"
        class="w-11 rounded-full border border-gray-500"
      />
      <div class="ml-3">
        <h2 class="text-xl font-normal text-black-500">{{ brand.title }}</h2>
        <p class="text-xs font-normal text-gray-200">{{ brand.description }}</p>
      </div>
    </div>
    

    <!-- main -->
    <div class="relative mb-2">
      <img
        :src="brand.products[0].img"
        alt="Main Product"
        class="object-cover w-[246px] h-[200px] rounded-xl brightness-75 transition duration-300"
      />
      <p
        class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black-300 via-black/70 to-transparent text-white text-sm font-normal px-2 py-1 opacity-0 group-hover:opacity-100 group-hover:rounded-xl rounded-xl transition-opacity duration-300"
      >
        {{ brand.products[0].price }} сум
      </p>
    </div>

    <!-- child -->
    <div class="grid grid-cols-2 gap-2">
      <div
        v-for="(product, index) in brand.products.slice(1)"
        :key="index"
        class="relative"
      >
        <img
          :src="product.img"
          alt="Product Image"
          class="w-[119px] h-[119px] object-cover rounded-xl brightness-75 transition duration-300"
        />
        <p
          class="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black-300 via-black/70 to-transparent text-white text-sm font-normal py-1 px-2 opacity-0 group-hover:opacity-100 group-hover:rounded-xl rounded-xl transition-opacity duration-300"
        >
          {{ product.price }} сум
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  brand: {
    type: Object,
    required: true,
  },
});
</script>
