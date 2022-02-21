import React from 'react'
import Book from '../components/Book.jsx'
import data from '../data'

export default function Booklist(props) {
  return (

    <section className="grid">
      {
        props.books.map(b => ( 
          <Book book= {b} key= {b.id} onDelete={props.onDelete}/>
        ))
      }
    
    </section>
  )
}
