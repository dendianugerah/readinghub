<template>
  <div class="detail-book">
    <div class="detail-book-title">
      {{ state.hero.headline }}
    </div>
    <div class="detail-book-container">
      <div class="detail-book-1">1</div>
      <div class="detail-book-1">2</div>
      <div class="detail-book-1">3</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "~/.nuxt/imports";

const state = reactive<{
  hero: {
    headline: string;
  };
  book: {
    title: string;
    description: string;
    code: string;
    category: string;
    publisher: string;
    author: string;
    amount: string;
    ISBN: string;
    publicationYear: string;
    RAK: string;
    image: string;
  };
}>({
  hero: {
    headline: "Detail Buku",
  },
  book: {
    title: "Mencuri Raden Dendi",
    description:
      "Novel ini membawa kita melintasi perjalanan yang menggugah hati, mulai dari hubungannya dengan keluarga, guru seninya yang inspiratif, hingga perjalanannya ke Eropa yang mengubah cara pandangnya tentang seni. Kita juga diajak menyaksikan pertemuannya dengan para seniman terkenal, perjuangannya mengatasi konflik internal, dan kontribusinya yang luar biasa dalam memperjuangkan hak-hak seniman di masa kolonial.",
    code: "AB82973",
    category: "Sains Fiksi",
    publisher: "Amikom",
    author: "Dendi Anugerah",
    amount: "34",
    ISBN: "45716215719",
    publicationYear: "2021",
    RAK: "P - SF - 3 - 1",
    image: "/static/img/donation/home/hero.png",
  },
});
</script>

<style lang="postcss" scoped>
.detail-book {
  @apply max-w-7xl mx-auto;

  &-title {
    @apply text-center font-ptserif font-bold text-[40px];
  }

  &-container {
    @apply grid grid-cols-3 gap-4;
  }
}
</style>
