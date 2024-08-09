<script lang="ts">
  import {ISBN} from "@/library/domain/ISBN.ts";
  import {inject} from "@/injections.ts";
  import {BOOKS} from "@/library/application/LibraryKeys.ts";
  import {
    type Loader,
    loadError, LoadingError,
    LoadingInProgress, LoadingSuccess,
    loadInProgress,
    loadSuccess
  } from "@/library/infrastructure/primary/Loader.ts";
  import type {Book} from "@/library/domain/Book.ts";
  import BookInfoComponent from "@/library/infrastructure/primary/BookInfoComponent.svelte";
  import i18nextSvelte from "@/i18next-svelte.ts";

  export let isbn: ISBN;

  let bookLoader: Loader<Book> = loadInProgress();

  inject(BOOKS)
    .get(isbn)
    .then(either => {
      either.evaluate(
        error => bookLoader = loadError(error.message),
        content => bookLoader = loadSuccess(content),
      )
    })
    .catch((error: Error) => bookLoader = loadError(error.message));
</script>

{#if (bookLoader.status === LoadingInProgress)}
  <p data-selector="book.loading">{$i18nextSvelte.t('book.inProgress')}</p>
{/if}

{#if (bookLoader.status === LoadingError)}
  <p data-selector="book.error">{bookLoader.errorMessage}</p>
{/if}

{#if (bookLoader.status === LoadingSuccess)}
  <BookInfoComponent book="{bookLoader.content}" />
{/if}
