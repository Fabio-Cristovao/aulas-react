import React from 'react'


export default function Book(props) {

  const {id, title, author, alreadyRead, description, imageUrl }= props.book ;

  const handleDelete = () => {
    props.onDelete(id)
  }
  
 
  return (
    <article>
      <h1>{title}</h1>
      <h2>{author}</h2>
      <img src={`livros/${imageUrl}`} alt={title}/>
      <p>Read: {
      alreadyRead ? 'lido' : 'não lido'}</p>
      <button onClick={handleDelete}>Delete</button>
    </article>
  )
  }
