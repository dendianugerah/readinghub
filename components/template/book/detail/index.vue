<template>
  <div class="detail-book">
    <div class="detail-book-title">
      {{ state.hero.headline }}
    </div>
    <div class="detail-book-container">
      <div class="detail-book-container-img">
        <img :src="state.hero.image" alt="" />
      </div>
      <div class="detail-book-container-content">
        <h1>
          {{ state.hero.title }}
        </h1>
        <span>
          {{ state.hero.description }}
        </span>
      </div>
      <div class="detail-book-container-form">
        <table>
          <tbody>
            <tr v-for="(value, key) in state.book" :key="key">
              <td class="py-2 px-4">{{ formatKey(key) }}</td>
              <td class="py-2 px-4">: {{ value }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="center-button">
      <router-link to="/" class="back-link">Kembali</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "~/.nuxt/imports";

const state = reactive<{
  hero: {
    headline: string;
    title: string;
    description: string;
    image: string;
  };
  book: {
    Kode: string;
    Kategori: string;
    Penerbit: string;
    Pengarang: string;
    Jumlah: string;
    ISBN: string;
    Tahun: string;
    RAK: string;
  };
}>({
  hero: {
    headline: "Detail Buku",
    title: "Mencuri Raden Dendi",
    description:
      "Novel ini membawa kita melintasi perjalanan yang menggugah hati, mulai dari hubungannya dengan keluarga, guru seninya yang inspiratif, hingga perjalanannya ke Eropa yang mengubah cara pandangnya tentang seni. Kita juga diajak menyaksikan pertemuannya dengan para seniman terkenal, perjuangannya mengatasi konflik internal, dan kontribusinya yang luar biasa dalam memperjuangkan hak-hak seniman di masa kolonial.",
    image: "/static/img/donation/home/hero.png",
  },
  book: {
    Kode: "AB82973",
    Kategori: "Sains Fiksi",
    Penerbit: "Amikom",
    Pengarang: "Dendi Anugerah",
    Jumlah: "34",
    ISBN: "45716215719",
    Tahun: "2021",
    RAK: "P - SF - 3 - 1",
  },
});

function formatKey(key: string): string {
  const formattedKey = key.replace(/ /g, "&nbsp;");
  if (key === "Kode") {
    return `${formattedKey} Buku`;
  }

  if (key === "Tahun") {
    return `${formattedKey} Terbit`;
  }

  return formattedKey;
}
</script>

<style lang="postcss" scoped>
.detail-book {
  @apply max-w-7xl mx-auto;

  &-title {
    @apply text-center font-ptserif font-bold text-[40px] pt-[40px] pb-[60px];
  }

  &-container {
    @apply md:grid md:grid-cols-3 gap-[33px] px-[16px] md:px-[0px];

    &-content {
      & > h1 {
        @apply font-ptserif font-bold text-[40px] pb-[24px];
      }

      & > span {
        @apply font-robotoslab text-[20px] text-[#272726];
      }
    }

    &-form {
      @apply font-robotoslab text-[20px];

      & > button {
        @apply mt-[24px] rounded-[32px] border-white border-[2px] w-[220px] h-[50px];
        @apply font-robotoslab text-white font-bold;
      }
    }
  }
}

.center-button {
  @apply flex justify-center mt-[24px] pb-[80px];

  & > .back-link {
    @apply items-center;
    @apply mt-[24px] rounded-[32px] border-black border-[2px] w-[220px] h-[50px];
    @apply font-robotoslab text-black font-bold;
    @apply flex justify-center items-center;
    @apply no-underline;
  }
}
</style>
