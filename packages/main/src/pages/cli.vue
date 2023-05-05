<script setup lang="ts">

</script>

<template>
  <article class="prose my-0 mx-auto lg:prose-xl px-8 py-10 text-gray-900 dark:text-gray-500">
    <h1 class="text-gray-900 dark:text-gray-400">脚手架介绍</h1>
    <h2>1. 下载安装</h2>
    <p>npm包地址: 
      <RouterLink class="text-blue-400" to="https://www.npmjs.com/package/create-kun">https://www.npmjs.com/package/create-kun</RouterLink>
    </p>
    <p>或直接使用该指令全局安装: </p>
    <p class="p-4 bg-gray-700 text-pink-500 rounded-md">npm install -g create-kun</p>
    
    <h2>2. 使用</h2>
    <p>使用如下指令创建微前端应用:</p>
    <p class="p-4 bg-gray-700 text-pink-500 rounded-md">kun create 《项目名》 </p>
    <img src="@/assets/images/kun-create.png" alt="创建微前端应用">

    <h4>2.1 创建主应用</h4>
    <p>选择上一步中的主应用,然后根据指示选择需要创建的主应用语言</p>
    <img src="@/assets/images/kun-main-type.png" alt="主应用语言">
    <p>根据提示选择子应用的配置后就会自动开始下载</p>
    <img src="@/assets/images/kun-main-finish.png" alt="">

    <h4>2.2 创建子应用</h4>
    <p>步骤与主营用基本相同,只需选择子应用并根据提示配置即可自动完成一个微前端子应用的创建</p>
    <img src="@/assets/images/kun-sub-finish.png" alt="创建子应用">
    <p>如上就是微前端脚手架的简单使用</p>
  </article>
</template>
