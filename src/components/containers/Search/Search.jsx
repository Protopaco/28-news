import React, { useState } from "react"

const Search = ({ OnSearchSubmit }) => {
    const [searchInput, setSearchInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        OnSearchSubmit(searchInput);
    }

    return (
        <form>
            <input
                onChange={(e) => { setSearchInput(e.target.value) }}
            />
            <button
                onClick={(e) => handleSubmit(e)}> Submit </button>
        </form >
    )
}


export default Search;
