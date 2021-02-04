import React, { useState } from "react"

const Search = ({ OnSearchSubmit }) => {
    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        OnSearchSubmit(searchInput);
    }

    return (
        <form >
            <input
                data-testid='searchBar'
                onChange={(e) => { setSearchInput(e.target.value) }}
            />
            <button
                onClick={(e) => handleSubmit(e)}
                data-testid='submitButton'> Submit </button>
        </form >
    )
}


export default Search;
