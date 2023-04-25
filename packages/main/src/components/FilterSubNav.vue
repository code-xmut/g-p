<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useThrottleFn } from '@vueuse/core'
import { tagApi } from '@/api'

defineEmits(['searchByTag'])

const show = ref(false)
const showFilter = ref(false)
const q = ref('')
const associatedTags = ref<string[]>([])

const getAssociatedTags = useThrottleFn(async () => {
  if (q.value === '') {
    associatedTags.value = []
    return
  }
  const { data } = await tagApi.findAssociateTags(q.value)
  associatedTags.value = data
}, 500)

watchEffect(() => {
  if (q.value !== '')
    getAssociatedTags()
})

const filterSets = computed(() => {
  return [
    {
      title: 'Tag',
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

const choose = (tag: string) => {
  q.value = tag
}
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
      <div>
        <div>
          {{ filterSets[0].title }}
        </div>
        <div class="mt-2">
          <Dropdown>
            <Input v-model:value="q" show-icon @keydown.enter="$emit('searchByTag', q)" />
            <template #content>
              <SearchAssociateTags v-if="associatedTags" v-model:q="q" :tags="associatedTags" @choose="choose" />
            </template>
          </Dropdown>
        </div>
      </div>
      <template v-for="set in filterSets" :key="set.title">
        <FilterSet :title="set.title">
          <Select :content="set.content" />
        </FilterSet>
      </template>
    </div>
  </div>
</template>
