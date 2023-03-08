<script setup lang="ts">
import { Icon } from '@iconify/vue'

const show = ref(false)
const showFilter = ref(false)
</script>

<template>
  <div class="px-[3vw]">
    <div class="pt-8 flex justify-between items-center">
      <Dropdown :show-content="show" trigger="click">
        <Button text="Popular" @click="show = !show">
          <template #icon>
            <Swap />
          </template>
        </Button>
      </Dropdown>
      <Button text="Filters" class="btn-secondary" @click="showFilter = !showFilter">
        <template #frontIcon>
          <Icon class="w-6 h-6" :icon="showFilter ? 'mdi:filter-variant-remove' : 'mdi:filter-variant'" />
        </template>
      </Button>
    </div>
    <div v-show="showFilter" class="flex flex-col lg:flex-row justify-between pt-4 pb-2">
      <FilterSet />
      <FilterSet title="Colors">
        <Select />
      </FilterSet>
      <FilterSet title="TimeFrame">
        <Select />
      </FilterSet>
      <FilterSet title="Downloads">
        <Select />
      </FilterSet>
    </div>
  </div>
</template>
