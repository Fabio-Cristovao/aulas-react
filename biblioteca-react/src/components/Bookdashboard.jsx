import React from 'react'
import Booklist from './Booklist'
import {data} from '../data.js'
import { useState } from 'react';
import BookForm from './BookForm';

let bookArray = data.books
console.log(data.books);

export default function Bookdashboard() {

  const [books, setBooks] = useState(data.books)

  const handDelete = (id) => {
    console.log('livro para apagar', id)
  
    setBooks( books.filter( b => b.id !== id ))
  }

  const handleAddBook = (book) => {
    console.log(book);
    setBooks([book, ...books]);
  }

  return (
    <section>
      <section>
        <BookForm
        onFormSubmit={handleAddBook}
        />
      </section>
     <Booklist
      books={books}
      onDelete={handDelete} />
    </section>
    

  )
}
