<script setup lang="ts">
  import testData from '../data/testData';
  import {createCSV, type Column} from '../utils/csv.util';

  const columns: Column[] = [
    {
      'key': 'firstName',
      'heading': 'First Name',
    },
    {
      'key': 'lastName',
      'heading': 'Last Name',
    }
  ]

  const objUrl = createCSV(testData, columns);
</script>

<template>
  <main>
    <a :href="objUrl" download="lorcana.csv">Download First Chapter</a>
  </main>
</template>
