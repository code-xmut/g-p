<script setup lang="ts">

</script>

<template>
  <ul class=" w-full cursor-pointer">
    <li>
      <a href="" class="group text-center">
        <Card>
          <img class=" rounded-tl-md rounded-tr-md " src="@/assets/images/image1.jpg" alt="">
          <ul class="grid grid-cols-3 gap-1 mt-1">
            <li>
              <img class=" rounded-bl-md" src="@/assets/images/image2.jpg" alt="">
            </li>
            <li>
              <img src="@/assets/images/image2.jpg" alt="">
            </li>
            <li>
              <img class="rounded-br-md" src="@/assets/images/image2.jpg" alt="">
            </li>
          </ul>
          <Link
            text="登录页"
            class="text-gray-900 dark:text-gray-500 my-3 group-hover:underline"
          />
          <div class="text-sm text-gray-500">
            <span>3 shots · 3 designer</span>
          </div>
        </Card>
      </a>
    </li>
  </ul>
</template>
