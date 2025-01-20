  <template>
  <div class="pb-16">
    <div class="container px-6 py-12 mx-auto max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Left Content -->
        <div>
          <h1 class="mb-4 text-2xl font-bold lg:text-3xl md:text-xl">О нас</h1>
          <div class="mx-auto space-y-4">
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
    <div class="bg-white">
      <div class="container px-6 py-8 mx-auto max-w-7xl">
        <h2 class="mb-8 text-lg font-bold lg:text-3xl md:text-xl">
          Статистика
        </h2>
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div
            v-for="(item, index) in stats"
            :key="index"
            class="flex items-center gap-4 statistics-item text-start"
          >
            <img :src="item.images" alt="" />
            <div class="text-xl font-bold lg:text-3xl">
              <CountUp
                class="gap-1 text-xl font-bold lg:text-3xl"
                :end-val="item.value"
                :suffix="item.suffix"
              />
              <p
                class="mt-2 text-xs font-normal text-gray-100 lg:text-base md:text-xs"
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
// TODO:jaxangir
// 1. write in Composition API
// 2. Make your transition animation global

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
