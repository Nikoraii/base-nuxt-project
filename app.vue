<template>
  <div class="pt-8 w-2/3 mx-auto">
    <h1 class="font-nulshock text-center text-5xl">
      TailwindCSS + PrimeVue + DaisyUI
    </h1>
    <PrimeCard class="bg-ms-gray-400 rounded-xl mt-4 p-2 shadow-md">
      <template #title>
        <div class="text-center">
          <span class="text-ms-red-400/80 font-semibold text-2xl uppercase">Base Nuxt Project</span>
        </div>
      </template>
      <template #content>
        <p class="mt-4 text-white/80 text-center">
          Configuration with required packages and setup for a Nuxt project.
        </p>
      </template>
    </PrimeCard>

    <div class="mt-4 w-full text-center">
      <button class="btn btn-primary text-white">
        HELLO
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "min-h-screen bg-ms-gray-200 font-prompt",
  },
});
</script>
