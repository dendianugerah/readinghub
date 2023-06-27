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
                type="text"
                placeholder="Email"
                class="hero-banner-container-hero-right-form-input my-[10px]"
              />
              <input
                type="password"
                placeholder="Password"
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
              <nuxt-link
                to="/register"
                class="hero-banner-container-hero-right-form-reg"
              >
                <img
                  src="/static/img/homepage/auth/google-icon.png"
                  alt="google"
                  class="mr-[10px]"
                />
                Daftar dengan Google
              </nuxt-link>
              <div
                class="flex items-center justify-center pt-[32px] font-robotoslab"
              >
                <hr class="flex-grow border-t border-gray-300 mr-2" />
                <span
                  >Sudah mempunyai akun?
                  <strong class="font-bold"
                    ><nuxt-link to="/login" class="text-blue-500"
                      >Login</nuxt-link
                    ></strong
                  ></span
                >
                <hr class="flex-grow border-t border-gray-300 ml-2" />
              </div>
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
  @apply relative pt-[32px] md:pt-[80px] md:mb-[80px] pb-[120px] overflow-hidden px-[16px] md:px-[0px];

  &-container {
    @apply mx-auto h-full max-w-7xl items-center justify-between;

    &-hero {
      @apply flex flex-col items-start justify-between md:flex-row md:gap-[20px];

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
          @apply flex font-robotoslab;

          &-input {
            @apply w-[340px] md:w-[384px] md:h-[48px] border-b-[1px] border-[#E0E0E0] text-sm;
            @apply select-text text-[#1A1A1A] placeholder-[#828282];

            :focus {
              @apply outline-none;
            }

            &-link {
              @apply mt-[18px] rounded-[32px] w-full h-[54px] bg-black;
              @apply font-bold text-white flex items-center justify-center;

              &-ctr {
                @apply text-center font-bold;
              }
            }
          }
          &-reg {
            @apply mt-[24px] rounded-[32px] border-primary border-[2px] w-full h-[50px] font-bold;
            @apply text-[#454545];
            @apply flex justify-center items-center;
          }
        }

      }

      &-left {
        @apply hidden md:flex;
        &-image {
          @apply mb-[68px] mt-[40px] rounded-[16px] object-cover;
          @apply h-full w-[250px] md:mb-0 md:mt-0 md:h-auto md:w-auto lg:h-[480px] lg:w-[500px];
        }
      }
    }
  }
}
</style>
