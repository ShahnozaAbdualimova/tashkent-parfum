<template>
    <div class="container">
        <CommonBreadcrumbs :items="breadcrumbItems" />
        <div class="flex space-x-6">
            <!-- Aside: Menyu qismi -->
            <aside class="w-1/4 border-r border-gray-200 pr-4">
                <ul class="space-y-4">
                    <li v-for="(item, index) in menuItems" :key="index">
                        <nuxt-link :to="item.link" :class="[
                            'block py-2 px-4 rounded-lg',
                            isActive(item.link) ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
                        ]">
                            {{ item.title }}
                        </nuxt-link>
                    </li>
                </ul>
            </aside>

            <!-- Section: Nested routing -->
            <section class="w-3/4">
                <NuxtPage />
            </section>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';



// Menyu elements
const menuItems = [
    { title: 'Персональные данные', link: '/profile', isActive: true },
    { title: 'Мои карты', link: '/profile/cards' },
    { title: 'Настройки', link: '/profile/settings' },
    { title: 'Инструкции', link: '/profile/instructions' },
    { title: 'Правила пользования', link: '/profile/rules' },
    { title: 'Кешбек', link: '/profile/cashback' },
    { title: 'Помощь', link: '/profile/help' },
];

const isActive = (link) => {
    const route = useRoute();
    return route.path === link;
};
</script>
