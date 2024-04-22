import { writable } from 'svelte/store';
import * as bookApi from '../http-actions/books-api';

const bookStore = writable([]);

const initBooks = async () => {
  try {
    const fetchBooks = await bookApi.getBooks();
    bookStore.set(fetchBooks);
  } catch (error) {
    console.error('Error while fetching books:', error);
  }
};

const useBookStore = () => {
  const addBook = (book) => {
    bookStore.update((currentBooks) => [...currentBooks, book]);
  };

  const deleteBook = async (id) => {
    bookStore.update((currentBooks) => {
      return currentBooks.filter((book) => book.id !== id);
    });

    try {
      await bookApi.deleteBook(id);
    } catch (error) {
      console.log('Error while deleting the book', error);
    }
  };

  return {
    subscribe: bookStore.subscribe,
    addBook,
    deleteBook,
  };
};

export { useBookStore, initBooks };
