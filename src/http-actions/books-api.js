import { useBookStore } from '../stores/books.svelte';

const getBooks = async () => {
  try {
    const response = await fetch('/api/books');
    return await response.json();
  } catch (error) {
    console.error('Error while fetching books:', error);
  }
};

const createBook = async (book) => {
  try {
    const response = await fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      throw new Error('Failed to add a book');
    }

    const data = await response.json();
    const bookStore = useBookStore();
    bookStore.addBook(data);
    return data;
  } catch (error) {
    console.error('Error while adding a book:', error);
  }
};

const deleteBook = async (id) => {
  try {
    const response = await fetch(`/api/books/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete book');
    }
    return { success: true };
  } catch (error) {
    console.error('Error while deleting book:', error);
    return { success: false };
  }
};

export { getBooks, createBook, deleteBook };
