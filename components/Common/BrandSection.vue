<template>
  <div class=" bg-white">
  <div class="py-4 ">
   
    <CommonSectionWrapper
      title="Популярные бренды"
      link-text="Все бренды"
    />

    <div class="">
      <CommonPopularBrands
       
        :brandList="brands"
      />
    </div>
  </div></div>
</template>

<script setup>
import { brands } from '~/data/brands';
</script>
