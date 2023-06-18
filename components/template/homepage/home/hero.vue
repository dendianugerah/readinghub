<template>
  <section class="hero-banner">
    <div class="hero-banner-container">
      <div class="hero-banner-container-hero">
        <div class="hero-banner-container-hero-left">
          <h1 v-dompurify-html="state.hero.headline" />

          <p class="select-text leading-[30px]">
            {{ state.hero.subheadline }}
          </p>
          <button class="">{{ state.hero.button }} </button>
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
    headline: "Temukan Buku yang Anda<br/> Cari!",
    subheadline:
      "Mari jelajahi dunia buku yang tak terbatas di Perpusatakaan. Dengan fitur pencarian Anda dapat dengan mudah menemukan buku yang ingin Anda baca, dan menikmati pengalaman membaca yang memuaskan. Ayo mulai pencarian buku Anda sekarang di halaman utama Perpusatakaan!",
    button: "Temukan Sekarang",
    image: "/static/img/homepage/hero.png",
  },
});
</script>

<style scoped lang="postcss">
.hero-banner {
  @apply overflow-hidden pt-[32px] md:pt-[80px] bg-primary;

  &-container {
    @apply relative mx-auto h-full max-w-7xl items-center justify-between text-white;

    &-hero {
      @apply flex flex-col items-center justify-between md:flex-row md:gap-[20px];
      @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0 pb-[80px];

      &-left {
        @apply flex flex-col md:w-[584px] mb-[80px];

        h1 {
          @apply select-text font-bold font-ptserif text-[40px] leading-[50px];
          @apply pb-[24px];
        }

        & > p {
          @apply select-text;
          @apply font-robotoslab text-[20px] leading-[25px];
        }

        & > button {
          @apply mt-[24px] rounded-[32px] border-white border-[2px] w-[220px] h-[50px];
          @apply font-robotoslab text-white font-bold;
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
