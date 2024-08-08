<template>
  <ul>
    <li data-selector="book.title">
      <strong data-selector="book.label.title">{{ `${t('book.title')} ` }}</strong>
      <span data-selector="book.title">{{ book.title }}</span>
    </li>
    <li data-selector="book.isbn">{{ book.isbn.get() }}</li>
  </ul>
</template>
<script lang="ts">
import {defineComponent, PropType} from "vue";
import {Book} from "@/library/domain/Book.ts";
import {useTranslation} from "i18next-vue";

export default defineComponent({
  props: {
    book: {
      type: Object as PropType<Book>,
      required: true
    },
  },
  setup() {
    const {t} = useTranslation();
    return {
      t,
    }
  }
})
</script>
