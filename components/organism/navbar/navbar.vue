<template>
  <section class="navbar">
    <div class="navbar-container">
      <div class="navbar-container-upper">
        <div class="navbar-container-upper-left">
          <!-- Mobile Menu -->
          <div class="md:hidden flex items-center">
            <button
              @click="handleToggleModal"
              class="outline-none mobile-menu-button"
            >
              <svg
                class="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
          <div
            v-if="isModalOpen"
            @click="handleToggleModal"
            class="mobile-menu-overlay"
          >
            <div class="mobile-menu-overlay-content">
              <h1>ReadingHub</h1>
              <div class="mobile-menu-overlay-content-bottom">
                <NuxtLink
                  to="/"
                  :class="{
                    active:
                      $route.path == '/' ||
                      $route.path.startsWith('/book') ||
                      $route.path.startsWith('/cart'),
                  }"
                  >Beranda</NuxtLink
                >
                <NuxtLink
                  to="/donation"
                  :class="{ active: $route.path.startsWith('/donation') }"
                  >Donasi</NuxtLink
                >
                <NuxtLink
                  to="/about-us"
                  :class="{ active: $route.path.startsWith('/about-us') }"
                  >Tentang Kami</NuxtLink
                >
                <NuxtLink
                  to="/contact-us"
                  :class="{ active: $route.path.startsWith('/contact-us') }"
                  >Kontak Kami</NuxtLink
                >
              </div>
            </div>
          </div>

          <!-- End of mobile menu-->
          <NuxtLink
            to="/"
            class="navbar-link"
            :class="{
              active:
                $route.path == '/' ||
                $route.path.startsWith('/book') ||
                $route.path.startsWith('/cart'),
            }"
            >Beranda</NuxtLink
          >
          <NuxtLink
            to="/donation"
            class="navbar-link"
            :class="{ active: $route.path.startsWith('/donation') }"
            >Donasi</NuxtLink
          >
          <NuxtLink
            to="/about-us"
            class="navbar-link"
            :class="{ active: $route.path.startsWith('/about-us') }"
            >Tentang Kami</NuxtLink
          >
          <NuxtLink
            to="/contact-us"
            class="navbar-link"
            :class="{ active: $route.path.startsWith('/contact-us') }"
            >Kontak Kami</NuxtLink
          >
        </div>
        <div class="navbar-container-upper-right">
          <span v-if="isLoggedIn">
            <NuxtLink to="/login">Speeeddd</NuxtLink>
          </span>
          <NuxtLink v-else to="/login">Masuk/Daftar</NuxtLink>
        </div>
      </div>
    </div>
    <div class="navbar-bottom">
      <div class="navbar-bottom-container">
        <div class="navbar-bottom-container-title">
          <h1>ReadingHub</h1>
          <div class="navbar-bottom-container-bar-mbl">
            <div>
              <molecule-navbar-popup-notification />
            </div>
            <NuxtLink to="/cart" class="cursor-pointer">
              <img
                src="/static/img/general/icon/bag-black.webp"
                alt="search-icon"
                class="w-[24px] h-[24px]"
              />
            </NuxtLink>
          </div>
        </div>
        <div class="navbar-bottom-container-content">
          <div class="navbar-bottom-container-content-divider">
            <div class="grid-item">
              <select
                class="focus:outline-none bg-[#fafafa] cursor-pointer border-none"
              >
                <option>Kategori</option>
                <option>Multimedia</option>
                <option>Hukum</option>
              </select>
            </div>
            <div class="grid-item">
              <input type="text" placeholder="Cari..." :size="5" />
            </div>
            <div
              class="grid-item bg-black rounded-r-[32px] text-white cursor-pointer text-center"
            >
              <NuxtLink to="/book/search">Cari</NuxtLink>
            </div>
          </div>
        </div>
        <div class="navbar-bottom-container-bar-dekstop">
          <div>
            <molecule-navbar-popup-notification />
          </div>
          <NuxtLink to="/cart" class="cursor-pointer">
            <img
              src="/static/img/general/icon/bag-black.webp"
              alt="search-icon"
              class="w-[24px] h-[24px]"
            />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const isLoggedIn = computed(() => {
  return route.path !== "/login" && route.path !== "/register";
});

const isModalOpen = ref(false);

const handleToggleModal = () => {
  isModalOpen.value = !isModalOpen.value;
};
</script>

<style lang="postcss" scoped>
.navbar {
  &-container {
    @apply relative mx-auto h-full max-w-7xl items-center;
    &-upper {
      @apply flex flex-row justify-between py-[14px] mx-[16px] xl:mx-0;

      &-left {
        @apply flex cursor-pointer;
      }

      &-right {
        @apply cursor-pointer;
      }

      .navbar-link {
        @apply mr-[22px] hover:font-bold hidden md:flex;
      }
    }
  }

  &-bottom {
    @apply bg-[#fafafa] py-[47px];
    @apply 2xl:px-0;

    &-container {
      @apply mx-[16px] md:mx-auto max-w-7xl md:grid md:grid-cols-3 flex flex-col;

      &-content {
        &-divider {
          @apply flex border rounded-[32px] divide-x;
        }
      }

      &-title {
        @apply flex justify-between mb-[20px] md:mb-0;
      }

      h1 {
        @apply text-[24px] font-bold font-ptserif;
      }

      &-bar {
        @apply justify-end;

        &-mbl {
          @apply flex md:hidden gap-[10px];
        }

        &-dekstop {
          @apply hidden md:flex justify-end gap-[30px];
        }
      }
    }
  }
}

.mobile-menu-overlay {
  @apply fixed inset-0 z-50 flex bg-black bg-opacity-50;

  &-content {
    @apply flex flex-col bg-white p-[20px] pr-[50px];

    & > h1 {
      @apply text-[24px] font-bold font-ptserif;
    }

    &-bottom {
      @apply flex flex-col gap-[20px] mt-[20px];
    }
  }
}

.navbar-link.active {
  font-weight: bold;
}

.grid-item {
  @apply grow p-[5px] md:p-[10px];

  & > h1 {
    @apply text-[16px] font-ptserif;
  }

  & > input {
    background-color: #fafafa;
  }

  input:focus {
    outline: none;
    background-color: #fafafa;
  }
}

.grid-item:nth-child(1) {
  @apply basis-1;
}
.grid-item:nth-child(3) {
  @apply md:basis-1/5;
}

.grid-item:nth-child(2) {
  @apply basis-4/12 md:basis-3/5;
}
</style>
