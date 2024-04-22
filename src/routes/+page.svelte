<script>
  import BookList from '../components/book-management/BookList.svelte';
  import AddBook from '../components/book-management/AddBook.svelte';
</script>

<svelte:head>
  <title>Book List</title>
</svelte:head>

<div class="min-h-screen">
  <AddBook />
  <BookList />
</div>
