<script setup lang="ts">
import { Icon } from '@iconify/vue'

const show = ref(false)
const showFilter = ref(false)

const filterSets = computed(() => {
  return [
    {
      title: 'Colors',
      content: [
        {
          name: 'Black',
        },
        {
          name: 'Blue',
        },
        {
          name: 'Brown',
        },
        {
          name: 'Gray',
        },
        {
          name: 'Green',
        },
        {
          name: 'Orange',
        },
        {
          name: 'Pink',
        },
        {
          name: 'Purple',
        },
        {
          name: 'Red',
        },
        {
          name: 'Teal',
        },
        {
          name: 'White',
        },
        {
          name: 'Yellow',
        },
      ],
    },
    {
      title: 'TimeFrame',
      content: [
        {
          name: 'Last 24 Hours',
        },
        {
          name: 'Last 7 Days',
        },
        {
          name: 'Last 30 Days',
        },
        {
          name: 'Last 12 Months',
        },
      ],
    },
    {
      title: 'Downloads',
      content: [
        {
          name: 'Most Popular',
        },
        {
          name: 'Most Downloaded',
        },
        {
          name: 'Most Viewed',
        },
      ],
    },
  ]
})
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
      <template v-for="set in filterSets" :key="set.title">
        <FilterSet :title="set.title">
          <Select :content="set.content" />
        </FilterSet>
      </template>
    </div>
  </div>
</template>
