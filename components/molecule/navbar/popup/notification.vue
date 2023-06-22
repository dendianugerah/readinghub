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
    class="molecule-navbar-notification-app-overlay"
    @click="handleToggleModal"
  />
  <transition name="fade" @enter="handleEnter" @leave="handleLeave">
    <div v-if="isModalOpen" class="molecule-navbar-notification-app-menu">
      <div class="molecule-navbar-notification-app-menu-wrapper">
        <div class="molecule-navbar-notification-app-menu-wrapper-body">
          <div class="modal-body-notification-left">
            <div class="modal-body-notification-left-wording">
              <p class="modal-body-notification-left-wording-subtitle">
                {{ state.text }}
              </p>
              <div class="modal-body-notification-left-wording-cancel">
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
            <div
              class="modal-body-notification-left-wording-card"
              v-for="(LoremIpsum, index) in loremIpsums"
              :key="index"
            >
              <div class="modal-body-notification-left-wording-card-content">
                <h1>{{ LoremIpsum.title }}</h1>
                <p>{{ LoremIpsum.content }}</p>
              </div>
              <div class="modal-body-notification-left-wording-card-img">
                <img src="/static/img/general/icon/mark.png" alt="" />
              </div>
            </div>
            <div class="modal-body-notification-left">
              <button
                @click="handleReadAll"
                class="modal-body-notification-left-button-item"
              >
                <img src="/static/img/general/icon/checks.png" alt="" />
                Tandai sudah dibaca
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const loremIpsums = [
  {
    title: "Admin",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.....",
  },
  {
    title: "Admin",
    content:
      "Mas, tolong kembalikan buku yang kamu pinjam ya, jangan sampai saya panggilkan debt collector ya",
  },
  {
    title: "Admin",
    content:
      "Halo, tolong kembalikan buku yang kamu pinjam ya, sudah telat 2 minggu mau diapakan bukunya?",
  },
];

const state = reactive<{
  text: string;
}>({
  text: "Notification",
});

const isModalOpen = ref(false);
const dropBrightness = ref(false);

const handleToggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
  dropBrightness.value = !dropBrightness.value;
};

const handleEnter = (el: any) => {
  el.style.opacity = "0";
  setTimeout(() => {
    el.style.opacity = "1";
  }, 0);
};

const handleLeave = (el: any) => {
  el.style.opacity = "1";
  setTimeout(() => {
    el.style.opacity = "0";
  }, 0);
};

const handleReadAll = () => {
  loremIpsums.splice(0, loremIpsums.length);
  isModalOpen.value = false;
  setTimeout(() => {
    isModalOpen.value = true;
  }, 0);
};
</script>

<style scoped lang="postcss">
.molecule-navbar-notification-app {
  @apply text-sm font-bold;

  &-overlay {
    @apply absolute top-0 left-0;
    transition: filter 0.3s ease-in-out;
    z-index: 998;
  }

  &-menu {
    @apply relative;
    z-index: 999;

    &-wrapper {
      @apply absolute right-6 top-full w-[auto] rounded-[12px] pt-[14px];

      &-body {
        @apply flex w-[576px] gap-[24px] rounded-[12px] bg-white p-[20px];
        box-shadow: 0px 0px 1px rgba(13, 17, 23, 0.15),
          0px 8px 10px -2px rgba(13, 17, 23, 0.1),
          0px 16px 25px -2px rgba(13, 17, 23, 0.1);
      }
    }
  }
}

.modal-body-notification {
  @apply flex gap-[24px];

  &-left {
    @apply flex w-full flex-col gap-[15px];

    &-wording {
      @apply flex flex-row gap-[16px] justify-between;

      &-card {
        @apply rounded-xl bg-white flex flex-row py-[16px] px-[32px];
        @apply gap-[30px];
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);

        &-content {
          @apply font-robotoslab;

          & > h1 {
            @apply font-bold text-[16px];
          }

          & > p {
            @apply text-[13px] text-secondary;
          }
        }

        &-img {
          @apply flex flex-col justify-center;
        }
      }

      &-subtitle {
        @apply select-text text-md text-black font-bold leading-[24px];
      }

      &-cancel {
        @apply cursor-pointer;
      }
    }

    &-button-item {
      @apply flex gap-[8px] items-center text-[13px] text-black font-bold leading-[24px] justify-end;

      & > img {
        @apply h-[16px] w-[16px];
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
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
</style>
