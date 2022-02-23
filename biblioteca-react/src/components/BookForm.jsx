import React, { useState } from 'react'

export default function BookForm(props) {

  const [title, settitle] = useState('');
  const [author, setauthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [alreadyRead, setAlreadyRead] = useState('')

  const handleSubmit = (e) => {

    let id = new Date().getTime();
    console.log(id);

    let newBook = {

      id: id,
      title: title,
      author: author,
      alreadyRead: alreadyRead,
      imageUrl: imageUrl,
      
    }

    props.onFormSubmit(newBook);

    settitle('');
    setauthor('');
    setImageUrl('');
    setAlreadyRead(false);

    e.preventDefault();


  }

  return (
    <section className="acrescentar">
       <form>

<div>
    <label htmlFor="title">Title:</label>
    <input type="text" id="title" value={title} onChange={ (e) => settitle(e.target.value)}/>
</div>

<div>
    <label htmlFor="author">Author:</label>
    <input type="text" id="author" value={author} onChange={ (e) => setauthor(e.target.value)}/>
</div>

 <div>
    <input type="checkbox" id="alreadyRead" checked={alreadyRead} onChange={ (e) => setAlreadyRead(e.target.checked)}/>
    <label htmlFor="alreadyRead" >Já Lido</label>
</div>

<div>
    <label htmlFor="imgUrl">Miniatura:</label>
    <input type="text" id="imgUrl" value={imageUrl} onChange={ (e) => setImageUrl(e.target.value)}/>
</div>

{/* <div>
    <label htmlFor="imgUrlGr">Imagem Gr:</label>
    <input type="text" id="imgUrlGr"/>
</div> */}
<div className="buttons">
    <button id="submitBtn" onClick= {handleSubmit}>Acrescentar livro</button>
</div>

</form>
    </section>
  )
}
