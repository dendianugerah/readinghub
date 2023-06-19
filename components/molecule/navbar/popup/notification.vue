<template>
  <button @click="handleToggleModal">
    <img
      src="/static/img/general/icon/notification.webp"
      alt="notification-icon"
      class="w-[24px] h-[24px]"
    />
  </button>
  <div
    v-if="isModalOpen"
    class="molecule-navbar-download-app-overlay"
    @click="handleToggleModal"
  />
  <div v-if="isModalOpen" class="molecule-navbar-download-app-menu">
    <div class="molecule-navbar-download-app-menu-wrapper">
      <div class="molecule-navbar-download-app-menu-wrapper-body">
        <div class="modal-body-download-left">
          <div class="modal-body-download-left-wording">
            <p class="modal-body-download-left-wording-subtitle">
              {{ state.text }}
            </p>
            <div class="modal-body-download-left-wording-cancel">
              <button @click="handleToggleModal">
                <img
                  src="/static/img/general/icon/cancel.webp"
                  alt="cancel-icon"
                  class="h-[16px] w-[16px]"
                />
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const state = reactive<{
  text: string;
}>({
  text: "Notification",
});

const isModalOpen = ref(false);

const handleToggleModal = () => (isModalOpen.value = !isModalOpen.value);
</script>

<style scoped lang="postcss">
.molecule-navbar-download-app {
  @apply text-sm font-bold;

  &-overlay {
    @apply absolute top-0 left-0;
  }

  &-menu {
    @apply relative;

    &-wrapper {
      @apply absolute right-6 top-full w-[auto] rounded-[12px] pt-[14px] text-sm text-[#71717a];

      &-body {
        @apply flex w-full gap-[24px] rounded-[12px] bg-white p-[20px];
        box-shadow: 0px 0px 1px rgba(13, 17, 23, 0.15),
          0px 8px 10px -2px rgba(13, 17, 23, 0.1),
          0px 16px 25px -2px rgba(13, 17, 23, 0.1);
      }
    }
  }
}

.modal-body-download {
  @apply flex gap-[24px];

  &-left {
    @apply flex w-[320px] flex-col gap-[20px];

    &-wording {
      @apply flex flex-row gap-[16px] justify-between;

      &-subtitle {
        @apply select-text text-md text-black font-bold leading-[24px];
      }

      &-cancel {
        @apply cursor-pointer;
      }
    }

    &-button-group {
      @apply flex gap-[8px];

      &-item {
        @apply h-[40px] w-[130px] rounded-[6px] border border-[#A6A6A6] bg-[#242527] px-[11px] py-[5.88px] hover:bg-[#353638];

        &-image {
          @apply h-[28.62px] w-[104px];
        }
      }
    }
  }

  &-right {
    @apply flex flex-col;

    &-barcode {
      @apply h-[96px] !w-[96px];
    }
  }
}
</style>
