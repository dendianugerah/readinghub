<template>
  <section class="hero-banner">
    <div class="hero-banner-container">
      <div class="hero-banner-container-hero">
        <div class="hero-banner-container-hero-left">
          <img
            class="hero-banner-container-hero-left-image"
            :src="state.hero.image"
            alt="hero-banner"
          />
        </div>
        <div class="hero-banner-container-hero-right">
          <h1 v-dompurify-html="state.hero.headline" />
          <section class="hero-banner-container-hero-right-form">
            <div class="hero-banner-container-hero-right-form-input">
              <input
                type="text"
                placeholder="Nama Lengkap"
                class="hero-banner-container-hero-right-form-input mb-[10px] mt-[30px]"
              />
              <input
                type="password"
                placeholder="Password"
                class="hero-banner-container-hero-right-form-input my-[10px]"
              />
              <input
                type="text"
                placeholder="Email"
                class="hero-banner-container-hero-right-form-input my-[10px]"
              />
              <a
                class="hero-banner-container-hero-right-form-input-link"
                :href="state.hero.data.link"
              >
                <span
                  class="hero-banner-container-hero-right-form-input-link-ctr"
                >
                  {{ state.hero.data.button }}
                </span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "~/.nuxt/imports";

const state = reactive<{
  hero: {
    headline: string;
    image: string;
    data: {
      button: string;
      link: string;
    };
  };
}>({
  hero: {
    headline: "Jangan lewatkan kesempatan ini dan daftarlah sekarang!",
    image: "/static/img/donation/home/hero.png",
    data: {
      button: "Daftar Akun",
      link: "/login",
    },
  },
});
</script>

<style scoped lang="postcss">
.hero-banner {
  @apply relative  pt-[32px] md:pt-[80px] mb-[80px];
  &-container {
    @apply mx-auto h-full max-w-7xl items-center justify-between;

    &-hero {
      @apply flex flex-col items-start justify-between md:flex-row md:gap-[20px];
      @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0;

      &-right {
        @apply flex flex-col md:w-[584px];

        h1 {
          @apply select-text text-[34px] font-ptserif font-bold w-[384px];
        }

        & > p {
          @apply select-text;
          @apply text-sm leading-[20px] md:text-md md:leading-[24px] lg:text-lg lg:leading-[28px];
        }

        &-form {
          @apply flex;

          &-input {
            @apply w-[384px] h-[48px] border-b-[1px] border-[#E0E0E0] text-sm;
            @apply select-text text-[#1A1A1A] placeholder-[#828282];
            :focus {
              @apply outline-none;
            }

            &-link {
              @apply mt-[18px] rounded-[32px] w-[384px] h-[54px] bg-black;
              @apply font-bold font-robotoslab text-white flex items-center justify-center;

              &-ctr {
                @apply text-center;
              }
            }
          }
        }
      }

      &-left {
        &-image {
          @apply mb-[68px] mt-[40px] rounded-[16px] object-cover;
          @apply md:mb-0 md:mt-0 md:h-auto md:w-auto lg:h-[480px] lg:w-[500px];
        }
      }
    }
  }
}
</style>
