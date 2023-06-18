<template>
  <section class="hero-banner">
    <div class="hero-banner-container">
      <div class="hero-banner-container-hero">
        <div class="hero-banner-container-hero-left">
          <h1 v-dompurify-html="state.hero.headline" />

          <p class="select-text leading-[30px]">
            {{ state.hero.subheadline }}
          </p>
          <a
            href="/donation/form"
            class="hero-banner-container-hero-left-button"
          >
            <span class="hero-banner-container-hero-left-button-ctr">
              {{ state.hero.button }}
            </span>
          </a>
        </div>
        <div class="hero-banner-container-hero-right">
          <img
            class="hero-banner-container-hero-right-image"
            :src="state.hero.image"
            alt="hero-banner"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from '~/.nuxt/imports';

const state = reactive<{
  hero: {
    headline: string;
    subheadline: string;
    button: string;
    image: string;
  };
}>({
  hero: {
    headline: "Ayo Lakukan Kebaikan Hari Ini!",
    subheadline:
      "Membaca adalah kegiatan yang menyenangkan, namun masih banyak orang yang tidak memiliki akses terhadap buku-buku yang bermanfaat. Oleh karena itu, kami mengajak Anda untuk berdonasi buku dengan kami dalam misi untuk memperluas akses ke dunia literasi. Satu buku yang anda donasikan sangat berarti bagi mereka.",
    button: "Donasi Sekarang",
    image: "/static/img/donation/home/hero.png",
  },
});
</script>

<style scoped lang="postcss">
.hero-banner {
  @apply relative overflow-hidden pt-[32px] md:pt-[80px];

  &-container {
    @apply relative mx-auto h-full max-w-7xl items-center justify-between text-black;

    &-hero {
      @apply flex flex-col items-center justify-between md:flex-row md:gap-[20px];
      @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0 pb-[80px];

      &-left {
        @apply flex flex-col md:w-[584px] mb-[40px];

        h1 {
          @apply select-text font-bold font-ptserif text-[40px] leading-[50px];
          @apply pb-[24px];
        }

        & > p {
          @apply select-text;
          @apply font-robotoslab text-[20px] leading-[25px];
        }

        &-button {
            @apply mt-[18px] rounded-[32px] w-[220px] h-[50px] bg-black;
            @apply font-bold font-robotoslab text-white flex items-center justify-center;

            &-ctr {
              @apply text-center;
            }
        }
      }

      &-right {
        @apply block;

        &-image {
          @apply rounded-[16px] object-cover;
          @apply w-[450px] h-[350px];
        }
      }
    }
  }
}
</style>
