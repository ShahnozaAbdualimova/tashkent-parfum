<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <NuxtLayout name="default">
    <main
      class="flex items-center justify-center bg-red-gradient"
      :style="{ height: `calc(100vh - 182px)` }"
    >
      <div class="container mx-auto flex flex-col justify-center items-center">
        <img src="/images/error.svg" alt="Error Image" />
        <h3 class="font-bold text-3xl my-3">Ошибка!</h3>
        <p class="my-3">Страница не существует или недоступна</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </main>
  </NuxtLayout>
</template>

<style scoped>
main {
  background-image: url('/images/error-bg.svg');
  background-size: 100vw;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
