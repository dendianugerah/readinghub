<template>
  <div class="app min-h-screen h-full w-full bg-white">
    <div class="navbar">
      <organism-navbar />
    </div>
    <slot />
    <organism-footer />
  </div>
</template>

<script lang="ts">
export default defineComponent({});

useHead({
  titleTemplate: "%s | ReadingHub",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
  ],
});
</script>


<style scoped lang="postcss">

.navbar {
  @apply hidden lg:block;
}
</style>