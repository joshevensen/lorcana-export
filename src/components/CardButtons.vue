<script setup lang="ts">
import { cardColumns, ImportCardsBySet, mapCards } from "@/services/lorcast";
import { createCSV } from "@/utils/csv.util";
import { snakeCase } from "lodash";

const props = defineProps({
  setName: {
    type: String,
    required: true,
  },
  setCode: {
    type: String,
    required: true,
  },
});

const fileName = snakeCase(`lorcana-${props.setName}`);
const cards: any = await ImportCardsBySet(props.setCode);
const refinedCards = mapCards(props.setCode, cards.results);
const objUrl = createCSV(refinedCards, cardColumns);
</script>

<template>
  <div>
    <a
      class="block py-2 px-4 border border-orange-600 text-center text-orange-600 font-bold hover:bg-orange-600 hover:text-white"
      :href="objUrl"
      :download="fileName"
    >
      Download CSV
    </a>
  </div>
</template>
