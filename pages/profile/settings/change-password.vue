<template>
  <div class="bg-white p-5 rounded-xl">
    <h1 class="text-2xl text-black-500 font-bold mb-4">Изменение пароля</h1>
    <hr class="mt-2.5 h-px border-none bg-white-500" />
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-6">
        <BaseFormGroup
          id="name"
          :label="'Старый пароль'"
          :label-style="'!text-base !text-black-500 '"
        >
          <BaseInput
            id="name"
            type="password"
            placeholder="Введите пароль"
            v-model="oldPassword"
          />
        </BaseFormGroup>
        <br class="max-sm:hidden block" />
        <BaseFormGroup
          id="name"
          :label="'Новый пароль'"
          :label-style="'!text-base !text-black-500 '"
        >
          <BaseInput
            id="name"
            type="password"
            placeholder="Введите пароль"
            v-model="newPassword"
          />
        </BaseFormGroup>
        <BaseFormGroup
          id="name"
          :label="'Подтвердите пароль'"
          :label-style="'!text-base !text-black-500 '"
        >
          <BaseInput
            id="name"
            type="password"
            placeholder="Введите пароль"
            v-model="confirmPassword"
          />
        </BaseFormGroup>
      </div>
      <BaseButton
        type="submit"
        class="mt-6 ml-auto"
        :class="{ 'opacity-50 cursor-not-allowed': !isFormValid }"
        :disabled="!isFormValid"
        @click="showModal = !showModal"
        >Сохранить</BaseButton
      >
    </form>

    <ModalPhoneConfirmation
      v-if="showModal"
      :isVisible="showModal"
      @closeModal="closeModal"
      :phoneNumber="'99 144 34 29'"
    />
  </div>
</template>

<script setup>
const oldPassword = ref('');
const newPassword = ref('');
const confirmPassword = ref('');

const isMatchPassword = computed(() => {
  return newPassword.value === confirmPassword.value;
});

const isFormValid = computed(() => {
  return (
    oldPassword.value &&
    newPassword.value &&
    confirmPassword.value &&
    isMatchPassword.value
  );
});

const handleSubmit = () => {
  console.log('Form submitted');
  console.log({
    oldPassword: oldPassword.value,
    newPassword: newPassword.value,
    confirmPassword: confirmPassword.value,
  });

  isMatchPassword.value
    ? console.log('Passwords match')
    : console.log('Passwords do not match');
};

const showModal = ref(false);

const closeModal = () => {
  showModal.value = false;
};
</script>
