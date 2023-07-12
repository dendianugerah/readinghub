<template>
  <div class="donation-success">
    <section class="donation-success-head">
      <img
        class="donation-success-head-image"
        :src="state.hero.image"
        alt="hero-banner"
      />
      <h1>
        {{ state.hero.headline }}
      </h1>
      <p class="select-text leading-[30px]">
        {{ state.hero.subheadline }}
      </p>
    </section>
    <section class="donation-success-bottom">
      <h1>Bagikan pengalaman ini!</h1>
      <div class="donation-success-bottom-icon">
        <img
          v-for="icon in state.bottom"
          :key="icon"
          :src="icon"
          class="social-media-icon"
          alt="social-media-icon"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from '~/.nuxt/imports';

const state = reactive<{
  hero: {
    headline: string;
    subheadline: string;
    image: string;
  };
  bottom: {
    instagramIcon: string;
    facebookIcon: string;
    twitterIcon: string;
  };
}>({
  hero: {
    headline: "Good deeds completed !",
    subheadline:
      "Donasimu berhasil diproses. Kami akan mengirimkan bukti donasi melalui email rhsupport@gmail.com. Anda dapat menyimpannya sebagai tanda bukti.",
    image: "/static/img/general/icon/donation-box.png",
  },
  bottom: {
    instagramIcon: "/static/img/general/icon/instagram.png",
    facebookIcon: "/static/img/general/icon/facebook.png",
    twitterIcon: "/static/img/general/icon/twitter.png",
  },
});
</script>

<style scoped lang="postcss">
.donation-success {
  @apply max-w-7xl mx-[16px] md:mx-auto items-center justify-center mb-[80px];

  &-head {
    @apply my-[58px] flex flex-col items-center font-ptserif;
    @apply text-center;

    & > h1 {
      @apply text-[36px] font-bold mb-[11px];
    }

    & > p {
      @apply font-robotoslab text-[20px] md:px-[230px] text-center;
    }

    & > img {
      @apply w-[170px] h-[170px] mb-[32px];
    }
  }

  &-bottom {
    @apply flex flex-col items-center justify-center;

    & > h1 {
      @apply font-bold text-[20px] font-ptserif;
    }

    &-icon {
      @apply flex gap-[20px] mt-[20px] h-[28px];
    }
  }
}
</style>
