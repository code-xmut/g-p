<script setup lang="ts">
defineProps<{
  tabs: ITabs[]
}>()

interface ITabs {
  name: string
  slotName: string
}

const activeTab = ref(0)

const activateTab = (index: number) => {
  activeTab.value = index
}
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
  <div class="tab-content py-6 px-4">
    <slot :name="tabs[activeTab].slotName" />
  </div>
</template>
