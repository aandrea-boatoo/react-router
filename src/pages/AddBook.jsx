import { useState, useEffect } from 'react';

export default function AddBook() {
    const [formData, setFormData] = useState({
        title: "",
        isbn: "",
        thumbnail: "",
        pageCount: 0,
        description: "",
    })
    function handleSubmit(event) {
        event.preventDefault();
        alert(formData.title);
    }
    function handleInputChange(e) {
        setFormData(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80 mb-10">
            <div className="formInput">
                <label htmlFor="title">Titolo del Libro</label>
                <input type="text" name="title" id='title' onChange={handleInputChange} value={formData.title} /> <br />
            </div>
            <div className="formInput">
                <label htmlFor="isbn">Codice isbn</label>
                <input type="text" name="isbn" id='isbn' onChange={handleInputChange} value={formData.isbn} /> <br />
            </div>
            <div className="formInput">
                <label htmlFor="thumbnail">Url Copertina</label>
                <input type="text" name="thumbnail" id='thumbnail' onChange={handleInputChange} value={formData.thumbnail} /> <br />
            </div>
            <div className="formInput">
                <label htmlFor="pageCount">Numero di Pagine</label>
                <input type="number" name="pageCount" id='pageCount' onChange={handleInputChange} value={formData.pageCount} /> <br />
            </div>
            <div className="formInput">
                <label htmlFor="trama">Trama</label>
                <input type="text" name="description" id='trama' onChange={handleInputChange} value={formData.description} /> <br />
            </div>

            <button type="submit">Aggiungi nuovo libro</button>
        </form>
    )
}