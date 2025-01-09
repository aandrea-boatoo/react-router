import CardComponent from "../Components/CardComponent";
import axios from "axios";
import { useState, useEffect } from "react";
import React from "react";
const apiUrl = 'http://localhost:3000';
const bookEndPoint = '/books';
export default function MainComponent() {
    const [books, setBooks] = useState([]);
    useEffect(getData, []);
    function getData() {
        axios
            .get(`${apiUrl}${bookEndPoint}`)
            .then((res) => { setBooks(res.data.results) })
            .catch((error) => { console.log(error) })
            .finally(() => { console.log("fatto") })
    }

    return (
        <>

            <div className="container">
                <div className="row">
                    {books.map((book) => {
                        return (

                            <div className="col-12 col-md-4 col-lg-3" key={book.id}>
                                <CardComponent data={book} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}