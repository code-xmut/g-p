<script setup lang="ts">
interface DropDownProps {
  trigger?: 'click' | 'hover'
}

withDefaults(defineProps<DropDownProps>(), {
  trigger: 'hover',
})
</script>

<template>
  <div
    class="dropdown"
    :class="{
      'dropdown-hover': trigger === 'hover',
    }"
  >
    <slot />
    <ul
      class="dropdown-content menu p-2 bg-white shadow text-gray-700 dark:bg-base-100 dark:text-gray-400 rounded-lg w-52"
    >
      <li>
        <a>
          <RouterLink to="/blog">Blog</RouterLink>
        </a>
      </li>
    </ul>
  </div>
</template>
