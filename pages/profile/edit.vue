<template>
  <!-- Profile Edit -->
  <div class="bg-white rounded-xl p-5">
    <!-- Profile Edit Header -->
    <div class="flex items-center justify-between">
      <h2 class="font-bold text-xl md:text-2xl text-black-500">
        Персональные данные
      </h2>
    </div>
    <hr class="mt-2.5 h-px border-none bg-white-500" />
    <div class="flex items-center">
      <div class="relative group">
        <div
          @click="triggerFileInput"
          class="w-16 h-16 flex-shrink-0 md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-[1.5px] border-gray-500 my-5 cursor-pointer"
        >
          <transition name="fade" mode="out-in">
            <img
              :key="imagePreview"
              :src="imagePreview || '/images/profile.png'"
              alt="Profile Picture"
              class="object-cover w-full h-full"
            />
          </transition>
        </div>
        <div
          @click="imagePreview = null"
          v-if="imagePreview"
          class="absolute top-0 left-0 w-16 h-16 flex-shrink-0 flex items-center justify-center md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-[1.5px] border-gray-500 my-5 cursor-pointer bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
        >
          <div
            class="w-11 h-11 bg-white flex items-center justify-center rounded-full opacity-0 group-hover:opacity-100 transition-300"
          >
            <i class="icon-trash text-3xl text-red-500"></i>
          </div>
        </div>
      </div>
      <input
        type="file"
        ref="fileInput"
        @change="onFileSelected"
        accept="image/*"
        class="hidden"
      />
      <BaseButton
        variant="outline"
        class="text-gray-200 font-semibold gap-1 ml-4"
        @click="triggerFileInput"
      >
        <i
          class="icon-edit text-xl w-5 h-5 flex items-center justify-center"
        ></i>
        Изменить фото
      </BaseButton>
    </div>
    <form class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 justify-end">
      <BaseFormGroup
        id="name"
        :label="'Ф.И.О'"
        :label-style="'text-base !text-black-500 '"
      >
        <BaseInput id="name" v-model="fullName" type="text" />
      </BaseFormGroup>
      <BaseFormGroup
        id="address"
        :label="'Адрес'"
        :label-style="'text-base !text-black-500 '"
      >
        <BaseInput id="address" v-model="address" type="text" />
      </BaseFormGroup>
    </form>
    <div class="flex gap-4 mt-11 justify-end">
      <BaseButton
        variant="secondary"
        @click="navigateTo('/profile')"
        class="text-sm text-red-500 !px-11 font-semibold"
      >
        Отменить
      </BaseButton>
      <BaseButton
        variant="primary"
        @click="saveProfile"
        class="!px-11 font-semibold"
      >
        Сохранить
      </BaseButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const fullName = ref('Мухаммадамин Домлахонов');
const address = ref('Tashkent, Uzbekistan');
const imagePreview = ref(null);
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const onFileSelected = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
};

const saveProfile = () => {
  console.log('Saving profile:', {
    fullName: fullName.value,
    address: address.value,
  });
  router.push('/profile');
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
