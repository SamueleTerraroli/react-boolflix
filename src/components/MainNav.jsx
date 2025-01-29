import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const MainNav = ({ setSearchTerm }) => {

    // Stato per gestire la visualizzazione dell'input e il termine di ricerca
    const [showInput, setShowInput] = useState(false);
    const [localSearchTerm, setLocalSearchTerm] = useState('');

    // Funzione per gestire il click sul pulsante di ricerca
    const handleSearchClick = () => {
        //console.log("search button cliccato")
        setShowInput(true);
    };

    // Funzione per gestire il cambiamento del valore di input
    const handleInputChange = (e) => {
        setLocalSearchTerm(e.target.value);
    };

    // Funzione per gestire l'invio del form
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchTerm(localSearchTerm);
        console.log('Submitted Search Term:', localSearchTerm);
        setShowInput(false);
        setLocalSearchTerm('')

    };

    //console.log("showInput:", showInput)

    return (
        <div className="main-nav d-flex align-items-center container justify-content-between">
            <div>
                <NavLink to="/" className='nav-link'><h1>BOOLFLIX</h1></NavLink>

            </div>
            <div>

                {showInput ? (
                    <form onSubmit={handleSubmit} className="search-form">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={localSearchTerm}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-danger ml-2 search-btn round">Search</button>
                    </form>
                ) : (
                    <button
                        type="button"
                        className="btn btn-danger search-btn"
                        onClick={handleSearchClick}
                    >
                        Search
                    </button>
                )}
            </div>
        </div>
    );

};

export default MainNav;
