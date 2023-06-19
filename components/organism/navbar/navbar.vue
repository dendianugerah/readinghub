<template>
  <section class="navbar">
    <div class="navbar-container">
      <div class="navbar-container-upper">
        <div class="navbar-container-upper-left">
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
        </div>
        <div class="navbar-bottom-container-content">
          <div class="navbar-bottom-container-content-divider">
            <div class="grid-item">
              <select class="focus:outline-none bg-[#fafafa] cursor-pointer">
                <option>Kategori</option>
                <option>Multimedia</option>
                <option>Hukum</option>
              </select>
            </div>
            <div class="grid-item">
              <input type="text" placeholder="Cari..." />
            </div>
            <div
              class="grid-item bg-black rounded-r-[32px] text-white cursor-pointer"
            >
              <NuxtLink to="/book/search">Cari</NuxtLink>
            </div>
          </div>
        </div>
        <div class="navbar-bottom-container-bar">
          <div>
            <molecule-navbar-popup-notification />
          </div>
          <a href="/cart" class="cursor-pointer">
            <img
              src="/static/img/general/icon/bag-black.webp"
              alt="search-icon"
              class="w-[24px] h-[24px]"
            />
          </a>
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
</script>

<style lang="postcss" scoped>
.navbar {
  &-container {
    @apply relative mx-auto h-full max-w-7xl items-center;
    &-upper {
      @apply flex flex-row justify-between py-[14px];

      &-left {
        @apply cursor-pointer;
      }

      &-right {
        @apply cursor-pointer;
      }

      .navbar-link {
        @apply mr-[22px] hover:font-bold;
      }
    }
  }

  &-bottom {
    @apply bg-[#fafafa] py-[47px];
    @apply 2xl:px-0;

    &-container {
      @apply mx-auto max-w-7xl grid grid-cols-3;

      &-content {
        &-divider {
          @apply flex border rounded-[32px] divide-x;
        }
      }

      h1 {
        @apply text-[24px] font-bold font-ptserif;
      }

      &-bar {
        @apply flex justify-end gap-[30px];
      }
    }
  }
}

.navbar-link.active {
  font-weight: bold;
}

.grid-item {
  flex-grow: 1;
  padding: 10px;

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

.grid-item:nth-child(1),
.grid-item:nth-child(3) {
  flex-basis: 20%;
}

.grid-item:nth-child(2) {
  flex-basis: 60%;
}
</style>
