<script setup lang="ts">
import type { IMyInterface } from '@gp/types';

const foo: IMyInterface = {
  id: 1,
  name: 'foo',
  habits: ['eat', 'sleep', 'code']
}

</script>

<template>
<div>
  <h1 class=" text-purple-500 text-3xl">{{ foo }}</h1>
</div>
</template>
