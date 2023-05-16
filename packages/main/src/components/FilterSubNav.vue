<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { useThrottleFn } from '@vueuse/core'
import {useI18n } from 'vue-i18n';
import { tagApi } from '@/api'

const emit = defineEmits(['searchByTag', 'searchByTime', 'sortBy'])
const { t } = useI18n();

const showFilter = ref(false)
const q = ref('')
const associatedTags = ref<string[]>([])
const sortCondition = reactive([
  {
    label: t('nav.popular'),
    value: 'collections',
  },
  {
    label: t('nav.newest'),
    value: 'likes',
  },
])

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
      title: t('nav.time_frame'),
      content: [
        {
          name: t('nav.last_24_hours'),
          hour: 24,
        },
        {
          name: t('nav.last_7_days'),
          hour: 24 * 7,
        },
        {
          name: t('nav.last_month'),
          hour: 24 * 30,
        },
        {
          name: t('nav.last_year'),
          hour: 24 * 365,
        },
      ],
    },
    {
      title: t('nav.downloads'),
      content: [
        {
          name: 'Most Popular',
          sort: 'popular',
        },
        {
          name: 'Most Collections',
          sort: 'collections',
        },
        {
          name: 'Most Views',
          sort: 'views',
        },
      ],
    },
  ]
})

const choose = (tag: string) => {
  q.value = tag
}

const onChange = (title: string, _q: string) => {
  if (title === 'TimeFrame') {
    const selectedSet = filterSets.value
      .find(set => set.title === title) as { title: string; content: { name: string; hour: number }[] }
    const selectedItem = selectedSet?.content.find(item => item.name === _q)

    const now = new Date().getTime()
    const time = now - (selectedItem?.hour ?? 0) * 60 * 60 * 1000 + 8 * 60 * 60 * 1000
    const timeStr = new Date(time).toISOString()

    emit('searchByTime', timeStr)
  }
}

const onSortConditionClick = (condition: string) => {
  emit('sortBy', condition)
}
</script>

<template>
  <div class="px-[3vw]">
    <div class="pt-8 flex justify-between items-center">
      <Dropdown>
        <Button text="排序" />
        <template #content>
          <ul class="flex flex-col space-y-2">
            <li v-for="s in sortCondition" :key="s.label" @click="onSortConditionClick(s.value)">
              <a>
                {{ s.label }}
              </a>
            </li>
          </ul>
        </template>
      </Dropdown>
      <Button :text="$t('nav.filters')" class="btn-secondary" @click="showFilter = !showFilter">
        <template #frontIcon>
          <Icon class="w-6 h-6" :icon="showFilter ? 'mdi:filter-variant-remove' : 'mdi:filter-variant'" />
        </template>
      </Button>
    </div>
    <div v-show="showFilter" class="flex flex-col lg:flex-row justify-between pt-4 pb-2">
      <div>
        <p>{{ $t('nav.tag') }}</p>
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
          <Select :title="set.title" :content="set.content" @change="onChange" />
        </FilterSet>
      </template>
    </div>
  </div>
</template>
