import { Link } from "react-router-dom";

export default function CardComponent({ data, onDeleteBook }) {
    return (
        <>
            <div className="card m-4">
                <img src={data.thumbnail} className="card-img-top" alt="img libro" />
                <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description.substring(0, 50) + "..."}</p>
                    <Link to={data.id.toString()} className="btn btn-primary">Details</Link>
                    <a href="#" className="delete-button btn btn-primary" onClick={onDeleteBook}>Delete</a>
                </div>
            </div>
        </>
    )
}