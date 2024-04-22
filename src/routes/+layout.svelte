<script>
  import { onMount } from 'svelte';
  import { initBooks } from '../stores/books.svelte.js';
  import '../app.css';

  onMount(() => {
    initBooks();
  });
</script>

<main class="container mx-auto">
  <slot />
</main>
