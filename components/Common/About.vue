<template>
    <div class=" pb-16">
      <div class="container mx-auto px-4 py-12">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <!-- Left Content -->
          <div>
            <h1 class="text-3xl font-bold mb-4">О нас</h1>
            <div class=" space-y-4">
              <p class=" text-lg font-normal text-black-500">
                Интернет-магазин элитной парфюмерии и косметики <span class=" font-medium">PARFUM TASHKENT</span> был создан в 2019 году. Каждый день мы заботимся о расширении ассортимента, улучшении функциональных возможностей электронного обслуживания и доставки, чтобы ваши покупки были комфортными и приносили удовольствие с первого клика!
              </p>
              <p class=" text-lg font-normal text-black-500">
                Наша основная задача - качественная работа с клиентами с одной единственной целью, чтобы как можно большее количество наших покупателей стали нашими постоянными клиентами и рекомендовали нас своим близким, друзьям и знакомым.
              </p>
            </div>
          </div>
  
          <!-- Right Content -->
          <div class="relative flex items-center justify-center">
            <div class="bg-white absolute rounded-2xl border-2 border-red-100 shadow-[0px_0px_40px_#FDD3DE] px-8 py-6 z-10">
              <img src="/public/images/logo.svg" alt="Toshkent Parfum Logo" class="w-40 object-cover" />
            </div>
            <div class="absolute right-12 -bottom-3 w-[140px] h-[168px] border-2 border-white-600 rounded-2xl overflow-hidden">
              <img src="/public/images/cardparfum3.png" alt="Perfume bottle" class="w-full h-full object-cover" />
            </div>
            <div class="absolute bottom-4 left-28 w-[103px] h-[123px] border-2 border-brown-200 rounded-2xl overflow-hidden">
              <img src="/public/images/cardparfum2.png" alt="Perfume collection" class="w-full h-full object-cover" />
            </div>
            <div class="absolute right-[102px] w-[103px] h-[123px] top-4 border-2 border-red-700 rounded-2xl overflow-hidden z-20">
              <img src="/public/images/cardparfum4.png" alt="Perfume collection" class="w-full h-full object-cover" />
            </div>
            <div class="absolute left-28 border-2 border-brown-100 w-[120px] h-[144px] top-8 rounded-2xl overflow-hidden z-20">
              <img src="/public/images/cardparfum1.png" alt="Store logo" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
  
      <!-- Statistics -->
      <div class="bg-white pt-8 pb-14 my-16">
        <div class="container mx-auto px-4 py-12">
          <h2 class="text-3xl font-bold  mb-8">Статистика</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item, index) in stats" :key="index" class=" statistics-item flex items-center text-start gap-4">
                <img :src="item.images" alt="">
              <div class="text-3xl font-bold ">
                <CountUp class=" text-3xl font-bold gap-1" :end-val="item.value" :suffix="item.suffix" />
                <p class="mt-2 text-base font-normal text-gray-100">{{ item.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonTopBrandsSection/>
    </div>
  </template>
  
  <script setup>
  import { ref, defineComponent, h, onMounted } from 'vue';
  
  // Simple CountUp component with number formatting
  const CountUp = defineComponent({
    props: {
      endVal: {
        type: Number,
        required: true,
      },
      suffix: {
        type: String,
        default: '',
      },
    },
    setup(props) {
      const currentValue = ref(0);
  
      // Formatter for numbers
      const numberFormatter = new Intl.NumberFormat('ru-RU');
  
      onMounted(() => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = props.endVal / steps;
        let current = 0;
  
        const timer = setInterval(() => {
          current += increment;
          currentValue.value = Math.min(Math.floor(current), props.endVal);
  
          if (current >= props.endVal) {
            clearInterval(timer);
          }
        }, duration / steps);
      });
  
      return () => h('span', null, `${numberFormatter.format(currentValue.value)}${props.suffix}`);
    },
  });
  
  // Statistics data
  const stats = ref([
    { label: 'Клиенты которые нам доверяют', value: 10000, suffix: '+', images: '/svg/users.svg' },
    { label: 'Категория качественных продуктов', value: 100, suffix: '', images: '/svg/listHeart.svg' },
    { label: 'Заказы на сегодняшний день', value: 8234, suffix: '', images: '/svg/users.svg' },
  ]);
  </script>
  <style scoped>
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .statistics-item {
    animation: fadeIn 0.9s ease-out forwards;
  }
  </style>
  