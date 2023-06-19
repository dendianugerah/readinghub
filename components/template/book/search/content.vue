<template>
  <section class="search-book">
    <div class="search-book-container">
      <div class="search-book-container-content">
        <div class="search-book-container-content-header">
          <h1 class="search-book-container-content-header-headline">
            {{ state.headline }}
          </h1>
          {{ state.description }}
        </div>

        <div class="search-book-container-content-list">
          <div
            v-for="(item, index) in state.data"
            :key="index"
            class="search-book-container-content-list-card"
          >
            <div class="search-book-container-content-list-card-img">
              <img :src="item.img_url" alt="img" />
            </div>
            <div class="search-book-container-content-list-card-content">
              <div class="flex flex-col gap-[12px]">
                <h1
                  class="search-book-container-content-list-card-content-title"
                >
                  {{ item.title }}
                </h1>
                <div
                  v-dompurify-html="item.author"
                  class="search-book-container-content-list-card-content-excerpt"
                />

                <img :src="item.excerpt" alt="img" class="w-[100px] h-[20px]" />
              </div>
              <a
                class="search-book-container-content-list-card-content-link"
                :href="item.link"
              >
                <span
                  class="search-book-container-content-list-card-content-link-ctr"
                >
                  {{ state.readmore }}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive } from "~/.nuxt/imports";

const state = reactive<{
  headline: string;
  description: string;
  readmore: string;
  data: {
    img_url: string;
    title: string;
    author: string;
    excerpt: string;
    link: string;
  }[];
}>({
  headline: "Hasil Pencarian",
  description:
    "Berikut beberapa hasil pencarian yang relevan dengan kata kunci yang anda masukkan",
  readmore: "Tambah",
  data: [
    {
      img_url: "/static/img/homepage/book-dorian.webp",
      title: "Buku Sakti Ternak Lele",
      author: " by: Ayam Goreng",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-inovation.webp",
      title: "Cara Mendapatkan Uang Dari Internet",
      author: " by: Finandhito",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-company.webp",
      title: "Meningkatkan Hasil Panen Lele",
      author: "by: Novita Mancing",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-company.webp",
      title: "Meningkatkan Hasil Panen Lele",
      author: "by: Novita Mancing",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-inovation.webp",
      title: "Cara Mendapatkan Uang Dari Internet",
      author: " by: Finandhito",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-milkandhoney.webp",
      title: "Sukses Sebelum 30 Detik, dan Terus Menerus",
      author: " by: Naufal GM PB",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-dorian.webp",
      title: "Buku Sakti Ternak Lele",
      author: " by: Ayam Goreng",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-kinfolk.webp",
      title: "Biografi Singkat Seorang Ayam Goreng",
      author: " by: Ayam Goreng",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-dorian.webp",
      title: "Buku Sakti Ternak Lele",
      author: " by: Ayam Goreng",
      excerpt: "/static/img/general/stars-4.png",
      link: "#",
    },
  ],
});
</script>

<style lang="postcss" scoped>
.search-book {
  @apply bg-white;
  @apply py-[32px] md:py-[80px];
  @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0;

  &-container {
    @apply mx-auto max-w-7xl;

    &-content {
      @apply relative h-full w-full items-center justify-center gap-3;

      &-header {
        @apply mb-[32px] flex flex-col gap-[8px] lg:mb-[80px];

        &-headline {
          @apply text-[40px] leading-[50px] font-bold font-ptserif;
          @apply select-text;
        }

        &-link {
          @apply text-[24px] leading-[24px] underline;
          @apply text-secondary;
        }
      }

      &-list {
        @apply flex flex-col flex-wrap justify-between gap-[12px] md:flex-row lg:gap-[32px];

        &-card {
          @apply flex flex-col rounded-[12px] bg-white;
          @apply sm:w-[329px] lg:w-[320px] 2xl:w-[329px] shadow-lg;

          &-content {
            @apply flex h-full flex-col justify-between gap-[12px];
            @apply px-[20px] pb-[20px] pt-[16px];

            &-title {
              @apply select-text text-lg font-bold leading-[28px] lg:text-xl lg:leading-[30px];
            }

            &-excerpt {
              @apply select-text text-sm  lg:text-md lg:leading-[24px];
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }

            &-link {
              @apply mt-[18px] rounded-[32px] w-[135px] h-[45px] bg-black;
              @apply font-bold font-robotoslab text-white flex items-center justify-center;

              &-ctr {
                @apply text-center;
              }
            }
          }

          &-img {
            @apply w-full;

            & > img {
              @apply w-full rounded-t-[12px] object-cover md:h-[320px];
            }
          }
        }
      }
    }
  }
}
</style>
