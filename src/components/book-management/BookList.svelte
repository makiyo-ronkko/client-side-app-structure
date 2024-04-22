<script>
  import Book from './Book.svelte';
  import { onMount } from 'svelte';
  import { useBookStore } from '../../stores/books.svelte';
  import { initBooks } from '../../stores/books.svelte';

  let books = [];
  const bookStore = useBookStore();

  let selectedBook = null;

  onMount(() => {
    const unsubscribeBooks = bookStore.subscribe((value) => {
      books = value;
    });
    initBooks();
    return () => {
      unsubscribeBooks();
    };
  });
</script>

<h1>Books</h1>

<ul>
  {#each books as book}
    <li>
      {book.name}
      <button on:click={() => (selectedBook = book)} class="btn btn-primary"
        >View</button
      >
      <button
        on:click={() => bookStore.deleteBook(book.id)}
        class="btn btn-primary">Delete</button
      >
    </li>
  {/each}
</ul>

{#if selectedBook}
  <Book book={selectedBook} />
  <button on:click={() => (selectedBook = null)} class="btn btn-primary"
    >Clear</button
  >
{/if}
