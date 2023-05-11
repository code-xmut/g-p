<script setup lang="ts">
interface OptionsProps {
  placeholder?: string
  title?: string
  content?: { name: string; value?: string }[]
}

const props = withDefaults(defineProps<OptionsProps>(), {
  placeholder: '请选择',
})

const emit = defineEmits(['change'])

const onChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const value = target.options[target.selectedIndex].innerText
  const dataV = target.options[target.selectedIndex].dataset.v
  emit('change', props.title, value, dataV)
}
</script>

<template>
  <select
    class="select select-primary bg-white dark:bg-darkBg"
    @change="onChange"
  >
    <option disabled selected>
      {{ placeholder }}
    </option>
    <template v-for="o in content" :key="o.name">
      <option :data-v="o.value">
        {{ o.name }}
      </option>
    </template>
  </select>
</template>
