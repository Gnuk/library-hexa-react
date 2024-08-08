<template>
  <p data-selector="book.loading" v-if="bookLoader.status === LoadingInProgress">{{t('book.inProgress')}}</p>
  <p data-selector="book.error" v-if="bookLoader.status === LoadingError">{{ (bookLoader as LoadError).errorMessage }}</p>
  <template v-if="bookLoader.status === LoadingSuccess"><BookInfoComponent :book="(bookLoader as LoadSuccess<Book>).content" /></template>
</template>

<script lang="ts">
import {defineComponent, PropType, ref} from "vue";
import {ISBN} from "@/library/domain/ISBN.ts";
import {inject} from "@/injections.ts";
import {BOOKS} from "@/library/application/LibraryKeys.ts";
import {
  Loader, LoadError,
  loadError, LoadingError,
  LoadingInProgress, LoadingSuccess,
  loadInProgress, LoadSuccess,
  loadSuccess
} from "@/library/infrastructure/primary/Loader.ts";
import {Book} from "@/library/domain/Book.ts";
import BookInfoComponent from "@/library/infrastructure/primary/BookInfoComponent.vue";
import {useTranslation} from "i18next-vue";

export default defineComponent({
  components: {BookInfoComponent},
  props: {
    isbn: {
      type: Object as PropType<ISBN>,
      required: true,
    },
  },
  setup(props) {
    const {t} = useTranslation();
    const bookLoader = ref<Loader<Book>>(loadInProgress())
    inject(BOOKS)
      .get(props.isbn)
      .then(either =>
        either.evaluate(
          error => bookLoader.value = loadError(error.message),
          content => bookLoader.value = loadSuccess(content),
        )
      )
      .catch((error: Error) => bookLoader.value = loadError(error.message));
    return {
      bookLoader,
      LoadingInProgress,
      LoadingError,
      LoadingSuccess,
      t,
    }
  }
})
</script>
