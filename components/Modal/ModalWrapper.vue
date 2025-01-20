<template>
  <Teleport to="body">
    <Transition name="modal">
      <div class="modal-overlay" v-if="props.isVisible">
        <div class="flex items-center justify-center">
          <slot></slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  isVisible: { type: Boolean, default: false },
});

watch(
  () => props.isVisible,
  (newVal) => {
    if (newVal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
  { immediate: true }
);

onMounted(() => {
  if (props.isVisible) {
    document.body.style.overflow = 'hidden';
  }
});

onUnmounted(() => {
  document.body.style.overflow = '';
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}


.modal-content {
  transform: scale(0.95);
  transition: transform 0.3s ease, opacity 0.3s ease;
  opacity: 0;
}

.modal-enter-active .modal-content {
  transform: scale(1);
  opacity: 1;
}

.modal-leave-active .modal-content {
  transform: scale(0.95);
  opacity: 0;
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(43, 43, 43, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* Safari support */
}
</style>
