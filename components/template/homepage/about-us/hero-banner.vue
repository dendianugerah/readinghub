<template>
  <section class="hero-banner">
    <div class="hero-banner-container">
      <div class="hero-banner-container-hero">
        <div class="hero-banner-container-hero-left">
          <h1 v-dompurify-html="state.hero.headline" />

          <p class="select-text leading-[30px]">
            {{ state.hero.subheadline }}
          </p>
        </div>
        <div class="hero-banner-container-hero-right">
          <img
            class="hero-banner-container-hero-right-image"
            :src="state.hero.image"
            alt="hero-banner"
          />
        </div>
      </div>

      <div class="hero-banner-container-what-is-readinghub">
        <h1 v-dompurify-html="state.summary.headline" />

        <div class="hero-banner-container-what-is-readinghub-content">
          <div
            v-dompurify-html="state.summary.content.text"
            class="hero-banner-container-what-is-readinghub-content-response"
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
    image: string;
  };
  summary: {
    headline: string;
    content: {
      text: string;
    };
  };
}>({
  hero: {
    headline: "ReadingHub - Temukan Buku yang Anda Cari!",
    subheadline:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "/static/img/donation/home/hero.png",
  },
  summary: {
    headline: "Apa itu ReadingHub",
    content: {
      text: "ReadingHub adalah Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </br> ReadingHub juga Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  },
});
</script>

<style scoped lang="postcss">
.hero-banner {
  @apply relative overflow-hidden pt-[32px] md:pt-[80px];
  &-container {
    @apply relative mx-auto h-full max-w-7xl items-center justify-between;

    &-hero {
      @apply flex flex-col items-center justify-between md:flex-row md:gap-[20px];
      @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0;

      &-left {
        @apply flex flex-col md:w-[584px];

        h1 {
          @apply select-text text-display-sm font-bold  lg:text-display-md;
        }

        & > p {
          @apply select-text;
          @apply text-sm leading-[20px] md:text-md md:leading-[24px] lg:text-lg lg:leading-[28px];
        }
      }

      &-right {
        @apply block;

        &-image {
          @apply mb-[68px] mt-[40px] h-[328px] w-full rounded-[16px] object-cover;
          @apply md:mb-0 md:mt-0 md:h-auto md:w-auto lg:h-[480px] lg:w-[584px];
        }
      }
    }

    &-what-is-readinghub {
      @apply bg-white py-[32px] md:bg-[transparent] md:px-0 md:pt-[80px];
      @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0;
      & > h1 {
        @apply text-display-xs font-bold leading-[30px];
        @apply select-text whitespace-pre-line text-[#1A1A1A];
        @apply md:text-center md:text-display-sm;
      }

      &-content {
        @apply mt-[16px] flex flex-col items-center justify-center md:mt-[40px];

        &-top {
          @apply flex w-full flex-col gap-x-[12px] gap-y-[16px] md:px-4 2xl:flex-row 2xl:gap-[32px] 2xl:px-0;
          @apply grid grid-cols-1 md:mb-[80px] lg:grid-cols-2;

          & > p {
            @apply text-sm leading-[20px] md:text-lg md:leading-[28px] lg:w-[584px];
            @apply select-text text-[#1A1A1A];
          }
        }

        &-bottom {
          @apply mb-[80px] mt-[40px] flex w-full flex-col justify-between gap-[32px] px-4 lg:flex-row lg:px-0;
        }
      }
    }
  }
}
</style>