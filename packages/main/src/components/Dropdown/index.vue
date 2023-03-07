<script setup lang="ts">

</script>

<template>
  <div class="dropdown dropdown-hover">
    <slot />
    <ul
      class="dropdown-content menu p-2 bg-white shadow text-gray-700 dark:bg-base-100 dark:text-gray-400 rounded-lg w-52"
    >
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
    </ul>
  </div>
</template>
