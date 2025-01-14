<template>
  <div class="flex items-center px-5">
    <div class="flex items-center py-5 gap-3">
      <div
        class="p-1.5 bg-white-300 rounded-xl border border-gray-300 w-[120px] h-[120px]"
      >
        <img :src="data.img" alt="item img" class="w-full h-full" />
      </div>

      <div class="flex flex-col min-h-[120px] pl-2.5">
        <h3
          class="cursor-pointer text-black-500 hover:text-red-500 duration-200 ease-in-out font-proxima leading-[130%] text-xl font-semibold max-w-[315px]"
        >
          {{ data.name }}
        </h3>
        <div class="flex gap-2 items-center mt-1">
          <CommonProductStars :rating="data.stars" />
          <p class="font-proxima text-sm text-gray-100 leading-[130%]">
            {{ data.review_amount }}
          </p>
        </div>
        <div class="flex gap-1 items-center mt-6 text-gray-100 cursor-pointer">
          <i class="icon-heart"></i>
          <p class="font-proxima text-sm">Добавить в избранное</p>
        </div>
      </div>

      <div class="min-h-[120px] w-[1px] bg-white-400"></div>
    </div>

    <div class="py-3 pl-[22px] flex justify-between items-start flex-grow">
      <div class="min-h-[120px] flex flex-col justify-between">
        <div>
          <p
            class="text-xs text-red-500 leading-[130%] font-proxima line-through"
          >
            {{
              data.discount !== null
                ? ((data.discount+data.price) * data.amount).toLocaleString('fr-FR') +
                  ' UZS'
                : data.discount
            }}
          </p>
          <h1 class="text-black-500 leading-[140%] text-xl font-semibold">
            {{ (data.price * data.amount).toLocaleString('fr-FR') }} UZS
          </h1>
          <p class="text-gray-100 text-sm leading-[130%]">
            {{ data.price.toLocaleString('fr-FR') }} UZS x {{ data.amount }}
          </p>
        </div>

        <div class="flex gap-1 items-center">
          <button
            @click="decreaseAmount"
            class="py-1.5 px-[13px] bg-white-500 rounded-r-sm rounded-l-lg icon-minus text-red-500 text-2xl border-[0.5px] border-white-500 hover:border-red-500 duration-300 ease-in-out active:scale-90"
          />
          <div
            class="py-3 px-5 bg-white-500 rounded-sm font-proxima text-[16px] leading-[130%]"
          >
            {{ data.amount }}
          </div>
          <button
            @click="increaseAmount"
            class="py-1.5 px-[13px] bg-white-500 rounded-l-sm rounded-r-lg icon-plus text-green-100 text-2xl border-[0.5px] border-white-500 hover:border-green-100 duration-300 ease-in-out active:scale-90"
          />
        </div>
      </div>

      <button
        class="min-h-8 min-w-8 p-1.5 text-gray-100 bg-white-500 rounded-lg icon-trash text-[20px] active:scale-90 duration-200 ease-in-out hover:bg-white-400 hover:text-gray-200"
      />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
});

const data = reactive(props.data);

const emit = defineEmits();

const increaseAmount = () => {
  data.amount++;
  emit('updateAmount', data.id, data.amount);
};

const decreaseAmount = () => {
  if (data.amount > 1) {
    data.amount--;
    emit('updateAmount', data.id, data.amount);
  }
};
</script>
