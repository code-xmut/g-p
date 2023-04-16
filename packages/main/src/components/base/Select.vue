<script setup lang="ts">
interface OptionsProps {
  placeholder?: string
  content?: { name: string; value?: string }[]
}

withDefaults(defineProps<OptionsProps>(), {
  placeholder: '请选择',
})

const emit = defineEmits(['change'])

const onChange = (e: Event) => {
  const target = e.target as HTMLSelectElement
  const value = target.options[target.selectedIndex].dataset.value
  emit('change', value)
}
</script>

<template>
  <select
    class="select select-primary w-full"
    @change="onChange"
  >
    <option disabled selected>
      {{ placeholder }}
    </option>
    <template v-for="o in content" :key="o.name">
      <option :data-value="o.value">
        {{ o.name }}
      </option>
    </template>
  </select>
</template>
