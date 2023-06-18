<template>
  <div class="section">
    <div class="section-container">
      <div class="section-container-content">
        <h1>
          {{ title }}
        </h1>
        <p>{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from '~/.nuxt/imports';

const data = reactive<{
  title: string;
  description: string;
}>({
  title: "Hubungi ReadingHub",

  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
});

const { title, description } = toRefs(data);
</script>

<style lang="postcss" scoped>
.section {
  @apply bg-white;

  &-container {
    @apply mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0;

    &-content {
      @apply mr-auto place-self-center py-8 lg:col-span-7 xl:py-0;

      h1 {
        @apply mb-4 max-w-2xl text-display-md font-bold leading-none tracking-tight xl:text-display-xl;
      }

      p {
        @apply mb-6 max-w-2xl font-normal  md:text-lg xl:mb-8;
        @apply md:w-[30rem] xl:w-[35rem];
      }
    }
  }
}
</style>
