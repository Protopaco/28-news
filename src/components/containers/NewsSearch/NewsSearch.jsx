import React, { useState, useEffect } from "react"
import Articles from "../Articles/Articles.jsx"
import Search from "../Search/Search.jsx"
import { fetchArticles, fetchHeadlines } from "../../services/fetch.js"

const NewsSearch = () => {
    const [articleList, setArticleList] = useState('')
    const [loading, setLoading] = useState(true)

    const handleSearchSubmit = (searchInput) => {
        setLoading(true)
        fetchArticles(searchInput)
            .then(response => setArticleList(response))
            .then(setLoading(false))
    }

    useEffect(() => {
        fetchHeadlines()
            .then(response => setArticleList(response))
            .then(setLoading(false))
    }, [])


    return (
        <div>
            <Search
                OnSearchSubmit={handleSearchSubmit}
            />
            {
                !loading ?
                    <Articles articleList={articleList} />
                    :
                    <p>LOADING!</p>
            }
        </div>
    )

}



export default NewsSearch;
