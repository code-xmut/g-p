<script setup lang="ts">
</script>

<template>
  <ul class="flex justify-center items-center space-x-2">
    <li class="hidden lg:block">
      <div class="hidden md:block">
        <Input show-icon />
      </div>
    </li>
    <li>
      <Link class="no-underline" text="Sign in" />
    </li>
    <li class="hidden lg:block">
      <Button class="btn btn-secondary" text="Sign up" />
    </li>
  </ul>
</template>
