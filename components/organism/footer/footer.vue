<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-content-discover">
          <div class="footer-content-discover-about">
            <h1>{{ state.discover.about.title }}</h1>
            <p>{{ state.discover.about.description }}</p>
          </div>

          <div class="footer-content-discover-icon">
            <a
              v-for="(icon, index) in state.discover.icon"
              :key="index"
              :href="icon.url"
              target="_blank"
            >
              <icon :name="icon.name" />
            </a>
          </div>
        </div>
        <div class="footer-content-menu">
          <div v-for="(data, index) in state.menu" :key="index">
            <h1 class="footer-content-menu-title">
              {{ data.title }}
            </h1>
            <ul class="footer-content-menu-list">
              <li v-for="(content, idx) in data.content" :key="idx">
                <nuxt-link
                  :to="content.url"
                  class="hover:font-bold"
                >
                  {{ content.name }}
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div>
          <p class="text-[12px] leading-[18px] md:text-sm md:leading-[20px]">
            {{ state.copyright }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const state = reactive<{
  discover: {
    about: {
      title: string;
      description: string;
    };
    icon: {
      name: string;
      url: string;
    }[];
  };
  menu: {
    title: string;
    content: {
      name: string;
      url: string;
    }[];
  }[];
  copyright: string;
}>({
  discover: {
    about: {
      title: "ABOUT US",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ut reprehenderit eius id dolorem sapiente, laudantium quasi animi itaque temporibus?",
    },
    icon: [
      {
        name: "carbon:logo-linkedin",
        url: "https://www.linkedin.com/",
      },
      {
        name: "carbon:logo-facebook",
        url: "https://www.facebook.com/",
      },
      {
        name: "carbon:logo-youtube",
        url: "https://www.youtube.com/",
      },
      {
        name: "carbon:logo-twitter",
        url: "https://twitter.com/",
      },
    ],
  },
  menu: [
    {
      title: "Categories",
      content: [
        { name: "Pemrograman", url: "#" },
        { name: "Multimedia", url: "#" },
        { name: "Filsafat dan Psikologi", url: "#" },
        { name: "Ekonomi", url: "#" },
        { name: "Hukum", url: "#" },
      ],
    },
    {
      title: "Information",
      content: [
        { name: "About Us", url: "#" },
        { name: "Contact Us", url: "#" },
        { name: "Privacy Policy", url: "#" },
        { name: "Borrow and Return", url: "#" },
        { name: "Terms & Conditions", url: "#" },
      ],
    },
    {
      title: "Service",
      content: [
        { name: "My Account", url: "#" },
        { name: "View Bag", url: "#" },
        { name: "Whistlist", url: "#" },
        { name: "Help", url: "#" },
      ],
    },
  ],
  copyright:
    "Copyright ©2023 ReadingHub - All Rights Reserved",
});
</script>

<style lang="postcss" scoped>
.footer {
  @apply select-text overflow-hidden font-ptserif text-primary bg-tertiary;

  &-container {
    @apply mx-auto flex max-w-7xl flex-col gap-[48px] pb-[24px] pt-[32px] md:pb-[40px] md:pt-[80px];
    @apply px-[1rem] sm:px-[2rem] lg:px-[4rem] 2xl:px-0;
  }

  &-logo {
    @apply flex w-[132px] justify-start lg:mx-0;
  }

  &-content {
    @apply flex flex-col gap-[40px] lg:flex-row 2xl:gap-[136px] bg-tertiary;

    &-discover {
      @apply mt-[-24px] w-[276px] md:mt-0 lg:text-left;

      &-about {
        @apply flex flex-col gap-[8px];
        white-space: pre-wrap;

        & > h1 {
          @apply select-text text-[18px] font-medium leading-[28px] text-primary;
          @apply md:text-xl md:leading-[30px];
        }
        & > p {
          @apply select-text text-sm leading-[20px] text-primary;
          @apply md:text-md md:leading-[24px];
        }
      }

      &-icon {
        @apply my-[16px] flex justify-start gap-[30px];

        & > a > svg {
          @apply h-[24px] w-[24px] text-primary hover:text-white;
        }
      }
    }

    &-menu {
      @apply grid grid-cols-2 justify-between sm:grid-cols-3;
      @apply gap-x-[32px] lg:w-[80%];

      &-title {
        @apply mb-[8px] text-[18px] font-bold leading-[28px] text-primary md:text-xl;
      }

      &-list {
        @apply flex w-full flex-col gap-[8px] 2xl:w-[179px];
        @apply text-sm leading-[20px] text-primary md:text-md md:leading-[24px];
        @apply mb-[20px] md:mb-0;
      }
    }
  }

  &-copyright {
    @apply border-t border-white border-opacity-25 pt-[24px] md:pt-[48px];
    @apply flex flex-col items-center justify-between;
    @apply gap-[20px] text-center;
  }

  &-switcher {
    @apply flex items-center rounded-[6px];

    &-link {
      @apply w-[100px] text-center text-sm;

      &-active {
        @apply rounded-[6px] bg-black px-[23px] py-[8px] text-[#242527];
      }
    }
  }
}
</style>
