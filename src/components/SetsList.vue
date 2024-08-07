<script setup lang="ts">
import { ImportSets } from "@/services/lorcast";
import CardButtons from "./CardButtons.vue";

let sets: any = await ImportSets();
sets = sets.results.filter((set: any) => set.code != "cp");
</script>

<template>
  <div class="container mx-auto px-4 pb-10">
    <h2 class="mb-4 text-xl text-center">
      Pick a set you would like to download a card csv file for?
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      <div
        v-for="set in sets"
        :key="set.id"
        class="flex flex-col justify-between p-4 bg-white border border-gray-300"
      >
        <div class="mb-6">
          <p class="text-2xl">
            <span
              class="pr-2 mr-2 border-r border-gray-300 text-lg text-gray-400"
            >
              {{ set.code }}
            </span>
            <strong>{{ set.name }}</strong>
          </p>

          <p class="text-sm text-gray-600">
            Release Date: {{ new Date(set.released_at).toLocaleDateString() }}
          </p>
        </div>

        <CardButtons :set-code="set.code" :set-name="set.name" />
      </div>
    </div>
  </div>
</template>
