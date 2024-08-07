<script setup lang="ts">
import SetsList from "@/components/SetsList.vue";
</script>

<template>
  <Suspense>
    <SetsList />
    <template #fallback>
      <p class="py-16 text-2xl text-gray-600 text-center">loading...</p>
    </template>
  </Suspense>
</template>
