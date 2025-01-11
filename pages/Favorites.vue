<template>
    <div class="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-900 mb-6">Избранное</h1>
        
        <div v-if="favorites.length === 0" class="text-center py-12 bg-white rounded-lg shadow">
          <BookmarkIcon class="mx-auto h-12 w-12 text-gray-400" />
          <h3 class="mt-2 text-sm font-medium text-gray-900">Нет избранных элементов</h3>
          <p class="mt-1 text-sm text-gray-500">Начните добавлять элементы в избранное, чтобы увидеть их здесь.</p>
        </div>
  
        <div v-else class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="item in favorites" :key="item.id" class="bg-white overflow-hidden shadow rounded-lg">
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <img class="h-10 w-10 rounded-full" :src="item.image" :alt="item.title" />
                </div>
                <div class="ml-4">
                  <h3 class="text-lg font-medium text-gray-900">{{ item.title }}</h3>
                  <p class="text-sm text-gray-500">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <button
                @click="removeFromFavorites(item.id)"
                class="text-sm font-medium text-red-600 hover:text-red-500"
              >
                Удалить из избранного
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { BookmarkIcon } from 'lucide-vue-next'
  
  // Пример данных избранных элементов
  const favorites = ref([
    { id: 1, title: 'Элемент 1', description: 'Описание элемента 1', image: '/placeholder.svg?height=40&width=40' },
    { id: 2, title: 'Элемент 2', description: 'Описание элемента 2', image: '/placeholder.svg?height=40&width=40' },
    { id: 3, title: 'Элемент 3', description: 'Описание элемента 3', image: '/placeholder.svg?height=40&width=40' },
  ])
  
  const removeFromFavorites = (id) => {
    favorites.value = favorites.value.filter(item => item.id !== id)
  }
  </script>