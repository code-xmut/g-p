<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

interface ITabs {
  name: string
  slotName: string
  routerName?: string
}
const props = defineProps<{
  tabs: ITabs[]
}>()

const router = useRouter()
const route = useRoute()
const activeTab = ref(0)

const activateTab = (index: number) => {
  activeTab.value = index
  router.push({ name: props.tabs[index].routerName })
}

const highlightTab = () => {
  const tab = props.tabs.find(t => t.routerName === route.name)
  if (tab)
    activeTab.value = props.tabs.indexOf(tab)
}

onMounted(highlightTab)
</script>

<template>
  <div class="tabs" v-bind="$attrs">
    <a
      v-for="(t, index) in tabs" :key="index"
      class="tab text-lg text-gray-500 font-semibold"
      :class="[activeTab === index ? 'text-secondary' : '']"
      @click="activateTab(index)"
    >
      {{ t.name }}
    </a>
  </div>
  <div class="tab-content py-6 px-4 lg:px-0">
    <RouterView />
  </div>
</template>
