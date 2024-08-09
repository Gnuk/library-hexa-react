<script lang="ts">
  import type {Book} from "@/library/domain/Book.ts";
  import i18nextSvelte from "@/i18next-svelte.ts";

  export let book: Book;
</script>

<ul>
  <li data-selector="book.title">
    <strong data-selector="book.label.title">{`${$i18nextSvelte.t('book.title')} `}</strong>
    <span data-selector="book.title">{ book.title }</span>
  </li>
  <li data-selector="book.isbn">{ book.isbn.get() }</li>
</ul>
