import { NavLink, Link } from "react-router-dom";

export default function HeaderComponent() {
    return (
        <>
            <h1 className="text-center">TIToLO BiBlioteca</h1>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-secondary-emphasis" to="/">Menu</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="NavLink" to="/">Home Page</NavLink >
                            <NavLink className="NavLink" to="/bookList" end>Biblioteca</NavLink >
                            <NavLink className="NavLink" to="/aboutUs">Chi siamo</NavLink >
                            <NavLink className="NavLink" to="/bookList/create">Aggiungi Libro</NavLink >
                        </div>
                    </div>
                </div>
            </nav >
        </>

    )
}