<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();

const changeLang = (lang: string) => {
  locale.value = lang;
};
</script>

<template>
  <Dropdown>
    <Icon class="pt-1.5 w-6 h-6" icon="mdi:ideogram-chinese-japanese-korean-variant" />
    <template #content>
      <ul>
        <li @click="changeLang('en')">
          <Action icon="ri:english-input" text="English" />
        </li>
        <li @click="changeLang('zh')">
          <Action icon="uil:letter-chinese-a" text="中文" />
        </li>
      </ul>
    </template>
  </Dropdown>
</template>
