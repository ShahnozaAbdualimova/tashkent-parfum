<template>
  <ModalWrapper>
    <div class="flex gap-4">
      <div class="flex rounded-xl">
        <Transition name="fade" mode="out-in">
          <div class="flex flex-col p-6 bg-white rounded-xl lg:rounded-r-none">
            <ModalAuthLogin
              @switchToRegister="showRegister"
              @switchToReset="showReset"
              v-if="activeComponent === 'login'"
            />

            <ModalAuthRegister
              @switchToLogin="showLogin"
              v-if="activeComponent === 'register'"
            />
            <ModalAuthResetPassword
              @switchToLogin="showLogin"
              @switchToConfirmation="showConfirmation"
              v-if="activeComponent === 'reset'"
            />
            <ModalAuthResetPasswordConfirmation
              @switchToReset="showReset"
              v-if="activeComponent === 'confirmation'"
            />
          </div>
        </Transition>
        <ModalAuthBanner class="hidden lg:block" />
      </div>

      <button
        @click="closeModal"
        class="h-8 w-8 text-xl text-white border-2 border-white rounded-[100%] flex items-center justify-center duration-200 ease-in-out hover:text-red-500 hover:border-red-500 hover:rotate-90"
      >
        &#x2715;
      </button>
    </div>
  </ModalWrapper>
</template>

<script setup>
import { ref } from 'vue';

const activeComponent = ref('login');

const emit = defineEmits(['closeModal']);
const closeModal = () => {
  emit('closeModal');
};

const showLogin = () => {
  activeComponent.value = 'login';
};

const showRegister = () => {
  activeComponent.value = 'register';
};
const showReset = () => {
  activeComponent.value = 'reset';
};
const showConfirmation = () => {
  activeComponent.value = 'confirmation';
};
</script>

<style scoped>
/* Fade transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
