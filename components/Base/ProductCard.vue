<template>
  <div
    class="col-span-1 w-[180px] bg-grey-00 shadow-lg rounded-xl border-2 border-white-600 overflow-hidden"
  >
    <div class="relative">
      <!-- images -->
      <img
        :src="product.image"
        alt="img"
        class="w-full  object-cover object-center"
      />
      <!-- discount -->
      <div
        v-if="product.discountTag"
        class="absolute top-3 left-3 border-2 border-green-200 rotate bg-green-100 text-white text-xs px-4 rounded-xl"
      >
        <i class="icon-sale text-white-100 text-2xl"></i>
      </div>
    </div>

    <div class="p-4  gap-1">
      <!-- Product name -->
      <h3 class="text-red-500 text-xs font-normal truncate font-proxima">
        {{ product.name }}
      </h3>
      <p class="text-black-500 font-normal text-sm font-proxima">{{ product.brand }}</p>

      <!-- price -->
      <div class="flex flex-col mt-1">
        <span class="text-red-500 line-through text-sm font-normal font-proxima">
          {{ product.oldPrice }} UZS
        </span>
        <span class="text-black-500 font-normal text-base font-proxima">
          {{ product.price }} UZS
        </span>
      </div>

      <!-- rating -->
      <div class="mt-2 flex items-center">
        <span v-for="n in 5" :key="n" class="text-yellow-100 text-sm">
          <i v-if="n <= product.rating" class="icon-star"></i>
          <i v-else class="icon-star"></i>
        </span>
        <span class="ml-2 text-grey-200 text-sm">({{ product.rating }})</span>
      </div>

      <!-- Counter -->
      <div v-if="isCounterVisible" class="flex items-center justify-center mt-4">
        <button
          class="px-3 py-2.5 flex items-center justify-center bg-white-100 rounded-l-lg rounded-r-sm"
          @click="decrement"
        >
          <i class="icon-minus text-red-500"></i>
        </button>

        <span class="mx-4 px-3 py-1.5 text-base text-black-500 bg-white-100 font-normal">
          {{ counter }}
        </span>

        <button
          class="px-3 py-2.5  flex items-center justify-center bg-white-100 rounded-r-lg rounded-l-sm"
          @click="increment"
        >
          <i class="icon-plus text-green-100"></i>
        </button>
      </div>
      <BaseButton
        v-else
        variant="danger"
        class="text-white-100 items-center justify-center flex mt-2"
        @click="showCounter"
      >
        <i
          class="icon-basket text-[24px] items-center flex text-white-100 duration-300 group-hover:text-white-100"
        ></i>
        В корзину
      </BaseButton>
    </div>
  </div>
</template>

<script setup>

// Props for the product data
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Reactive state variables
const isCounterVisible = ref(false);
const counter = ref(1);

// Methods
const showCounter = () => {
  isCounterVisible.value = true;
};

const increment = () => {
  counter.value++;
};

const decrement = () => {
  if (counter.value > 1) {
    counter.value--;
  }
};
</script>

<style scoped>
.rotate {
  transform: rotate(-11deg);
}
</style>
