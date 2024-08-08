<template>
  <h2 data-selector="contact.title">{{t('contact.title')}}</h2>
  <address data-selector="contact.email">{{t('contact.email')}}</address>
</template>

<script setup lang="ts">
import {useTranslation} from "i18next-vue";

const {t} = useTranslation();
</script>
