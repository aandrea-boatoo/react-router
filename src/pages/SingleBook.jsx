import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardComponent from '../Components/CardComponent';
const bookEndPoint = "/books/"
const apiUrl = import.meta.env.VITE_API_URL
export default function SingleBook() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    useEffect(getData, [id]);
    function getData() {
        axios.get(`${apiUrl}${bookEndPoint}${id}`)
            .then((res) => {
                setBook(res.data.item);
                console.log(res.data.success);
                console.log(`${apiUrl}"/bookList/"${id}`);
            }).catch((error) => {
                console.log(error)
            }).finally(() => { console.log("fine"); })
    }
    return (
        <section>
            <h1>Sono il libro numero {id}</h1>
            {book && (<CardComponent data={book} />)}
        </section>
    )
}