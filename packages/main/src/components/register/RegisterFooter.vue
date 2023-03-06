<script setup lang="ts">

</script>

<template>
  <div class="text-sm">
    <span>
      已有账号?
    </span>
    <Link
      text="去登陆"
      @click="$router.push({ name: 'login', query: { pattern: 'login' } })"
    />
  </div>
  <div class="text-xs text-center mt-20 md:mt-1 lg:mt-20">
    <p>创建账号即表示您接受我们的</p>
    <Link text="服务条款和隐私政策" />
  </div>
</template>
