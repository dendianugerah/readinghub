<template>
  <section class="content-top">
    <div class="content-top-container">
      <div class="content-top-container-content">
        <div class="content-top-container-content-header">
          <h1 class="content-top-container-content-header-headline">
            {{ state.headline }}
          </h1>
          <NuxtLink
            class="content-top-container-content-header-link"
            to="book/search"
          >
            {{ state.readAllArticle }}
          </NuxtLink>
        </div>

        <div class="content-top-container-content-list">
          <div
            v-for="(item, index) in state.data"
            :key="index"
            class="content-top-container-content-list-card"
          >
            <div class="content-top-container-content-list-card-img">
              <NuxtLink to="/book/detail">
                <img
                  :src="item.img_url"
                  class="content-top-container-content-list-card-img-hover"
                  alt="img"
                  @mouseenter="showDetails(index, true)"
                  @mouseleave="showDetails(index, false)"
                />
              </NuxtLink>
              <div
                v-if="state.showDetails[index]"
                class="content-top-container-content-list-card-img-overlay"
              >
                <span> Lihat Detail Buku </span>
              </div>
            </div>

            <div class="content-top-container-content-list-card-content">
              <div class="flex flex-col gap-[12px]">
                <h1
                  class="content-top-container-content-list-card-content-title"
                >
                  {{ item.title }}
                </h1>
                <div
                  v-dompurify-html="item.author"
                  class="content-top-container-content-list-card-content-excerpt"
                />

                <img :src="item.excerpt" alt="img" class="w-[100px] h-[20px]" />
              </div>
              <a
                class="content-top-container-content-list-card-content-link"
                :href="item.link"
              >
                <span
                  class="content-top-container-content-list-card-content-link-ctr"
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
  readAllArticle: string;
  readmore: string;
  data: {
    img_url: string;
    title: string;
    author: string;
    excerpt: string;
    link: string;
  }[];
  showDetails: boolean[];
}>({
  headline: "Rekomendasi Buku Terbaru",
  readAllArticle: "Tampilkan Semua",
  readmore: "Tambah",
  data: [
    {
      img_url: "/static/img/homepage/book-dorian.webp",
      title: "Buku Sakti Ternak Lele",
      author: " by: Ayam Goreng",
      excerpt: "static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-company.webp",
      title: "Meningkatkan Hasil Panen Lele",
      author: "by: Novita Mancing",
      excerpt: "static/img/general/stars-4.png",
      link: "#",
    },
    {
      img_url: "/static/img/homepage/book-narnia.webp",
      title: "Cabe Rawit Untung Besar",
      author: "by: Ain Berkebun",
      excerpt: "static/img/general/stars-4.png",
      link: "#",
    },
  ],
  showDetails: [false, false, false],
});

const showDetails = (index: number, isHovering: boolean) => {
  state.showDetails[index] = isHovering;
};
</script>

<style lang="postcss" scoped>
.content-top {
  @apply py-[32px] md:py-[80px];
  @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0;

  &-container {
    @apply mx-auto max-w-7xl;

    &-content {
      @apply relative h-full w-full items-center justify-center gap-3;

      &-header {
        @apply mb-[32px] flex flex-row items-center justify-between gap-[8px] md:text-center lg:mb-[80px];

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
        @apply flex flex-col flex-wrap justify-between gap-[12px] md:flex-row md:flex-nowrap lg:gap-[66px];

        &-card {
          @apply flex flex-col rounded-[12px] bg-white;
          @apply sm:w-[329px] md:w-auto lg:w-[320px] 2xl:w-[329px] shadow-lg;

          &-content {
            @apply flex h-full flex-col justify-between gap-[12px];
            @apply px-[20px] pb-[20px] pt-[16px];

            &-title {
              @apply select-text font-bold leading-[28px] lg:leading-[30px] font-ptserif;
              @apply text-[20px];
            }

            &-author {
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
            @apply w-full hover:bg-opacity-5 hover:bg-grey cursor-pointer relative;

            &-hover {
              transition: filter 0.3s ease-in-out;

              &:hover {
                filter: brightness(0.3);
              }
            }

            &-overlay {
              @apply top-[100px] right-[100px];
              position: absolute;

              & > span {
                color: white;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
}
</style>
