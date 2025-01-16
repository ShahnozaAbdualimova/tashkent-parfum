<template>
  <div class="pb-16">
    <div class="max-w-7xl container mx-auto px-6 py-12">
      <div class="grid lg:grid-cols-2 gap-12 items-center ">
        <!-- Left Content -->
        <div>
          <h1 class="lg:text-3xl text-2xl md:text-xl font-bold mb-4">О нас</h1>
          <div class="space-y-4 mx-auto">
            <p
              class="text-base font-normal text-black-500 lg:text-lg md:text-sm"
            >
              Интернет-магазин элитной парфюмерии и косметики
              <span class="font-medium">PARFUM TASHKENT</span> был создан в 2019
              году. Каждый день мы заботимся о расширении ассортимента,
              улучшении функциональных возможностей электронного обслуживания и
              доставки, чтобы ваши покупки были комфортными и приносили
              удовольствие с первого клика!
            </p>
            <p
              class="text-base font-normal text-black-500 lg:text-lg md:text-sm"
            >
              Наша основная задача - качественная работа с клиентами с одной
              единственной целью, чтобы как можно большее количество наших
              покупателей стали нашими постоянными клиентами и рекомендовали нас
              своим близким, друзьям и знакомым.
            </p>
          </div>
        </div>

        <!-- Right Content -->
        <img
          class="w-full max-w-[397px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[397px] h-auto items-center mx-auto flex"
          src="/images/static-img.png"
          alt="Изображение"
        />
      </div>
    </div>

    <!-- Statistics -->
    <div class="bg-white  ">
      <div class="max-w-7xl container mx-auto px-6 py-8">
        <h2 class="lg:text-3xl text-lg md:text-xl font-bold mb-8">
          Статистика
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="statistics-item flex items-center text-start gap-4"
          >
            <img :src="item.images" alt="" />
            <div class="lg:text-3xl text-xl font-bold">
              <CountUp
                class="lg:text-3xl text-xl font-bold gap-1"
                :end-val="item.value"
                :suffix="item.suffix"
              />
              <p
                class="mt-2 lg:text-base text-xs md:text-xs font-normal text-gray-100"
              >
                {{ item.label }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <CommonTopBrandsSection />
  </div>
</template>

<script setup>
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

    return () =>
      h(
        'span',
        null,
        `${numberFormatter.format(currentValue.value)}${props.suffix}`
      );
  },
});

// Statistics data
const stats = ref([
  {
    label: 'Клиенты которые нам доверяют',
    value: 10000,
    suffix: '+',
    images: '/svg/users.svg',
  },
  {
    label: 'Категория качественных продуктов',
    value: 100,
    suffix: '',
    images: '/svg/listHeart.svg',
  },
  {
    label: 'Заказы на сегодняшний день',
    value: 8234,
    suffix: '',
    images: '/svg/users.svg',
  },
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
