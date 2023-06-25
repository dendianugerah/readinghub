<template>
  <div class="cart-success">
    <section class="cart-success-head">
      <img
        class="cart-success-head-image"
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
    <section class="cart-success-bottom">
      <h1>Bagikan pengalaman ini!</h1>
      <div class="cart-success-bottom-icon">
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
import { reactive } from "~/.nuxt/imports";

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
    headline: "Peminjaman Berhasil !",
    subheadline:
      "Peminjamanmu berhasil diproses. Kami akan mengirimkan bukti peminjaman melalui email rhsupport@gmail.com. Harap segera mengambil buku pinjaman sesuai tanggal pinjam yang telah Anda isi. Apabila dalam 48 jam setelah tanggal isi buku tidak segera diambil, maka secara otomatis peminjaman akan dibatalkan.",
    image: "/static/img/homepage/cart/success/books.webp",
  },
  bottom: {
    instagramIcon: "/static/img/general/icon/instagram.png",
    facebookIcon: "/static/img/general/icon/facebook.png",
    twitterIcon: "/static/img/general/icon/twitter.png",
  },
});
</script>

<style scoped lang="postcss">
.cart-success {
  @apply max-w-7xl mx-auto items-center justify-center mb-[80px];

  &-head {
    @apply my-[58px] flex flex-col items-center font-ptserif;

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
