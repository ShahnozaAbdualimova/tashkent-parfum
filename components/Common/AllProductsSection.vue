<template>
  <section class="">
    <div class="container mx-auto my-6">
      <div class="flex justify-between pt-5 gap-6">
        <div class="bg-white rounded-lg">
          <CommonFilterSidebar />
        </div>
        <div class="items-center justify-center">
          <div class="flex items-center justify-between">
            <h3 class="font-normal text-3xl text-black-500">Все продукты</h3>

            <Dropdown
              :selectedValue="selectedItems"
              :options="items"
              @update:selectedValue="updateItems"
            />
          </div>

          <div class="p-5 bg-white rounded-xl mt-5">
            <h4 class="text-2xl font-normal text-black-500">
              Популярные предложения
            </h4>
            <div class="grid grid-cols-4 gap-5 mt-4">
              <BaseProductCard
                v-for="(product, index) in products.slice(0, 4)"
                :key="index"
                :product="product"
              />
            </div>
          </div>

          <div class="grid grid-cols-4 gap-5 mt-5">
            <BaseProductCard
              v-for="(product, index) in products.slice(0, 8)"
              :key="index"
              :product="product"
            />
          </div>
          <div class="mt-5">
            <img
              src="/public/images/image.png"
              alt="image-allProducts"
              class="w-[884px] h-[117px] rounded-lg"
            />
            <div class="grid grid-cols-4 gap-5 mt-5">
              <BaseProductCard
                v-for="(product, index) in products.slice(0, 4)"
                :key="index"
                :product="product"
              />
            </div>
          </div>
          <div class="mt-5 flex items-center justify-center mb-14">
            <BaseButton
              :variant="'lightDanger'"
              class=""
              :type="'button'"
              :disabled="false"
              :icon="'icon-left rotate-90'"
              :icon-position="'left'"
              @click="basketProduct"
            >
              Загрузить еще
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { products } from '~/data/mainProductSection';
import Dropdown from '/components/Base/Dropdown.vue';

const selectedItems = ref('По популярности');
const items = ref(['Для мужчин', 'Для женщин']);

const updateItems = (item) => {
  selectedItems.value = item;
};
</script>

<style></style>
