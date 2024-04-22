import { books } from '../book-data.js';
import { json } from '@sveltejs/kit';

export const DELETE = async ({ params }) => {
  const { id } = params;
  const index = books.findIndex((book) => book.id === parseInt(id));
  if (index === -1) {
    return json({ error: 'Book is not found' }, { status: 404 });
  }

  books.splice(index, 1);
  // create a "Response" object with JSON content inlcuding the data
  return json({ message: 'Book is successfully deleted' }, { status: 200 });
};
