
const apiKey = "apiKey=d4cce70013f8458aab0d518feed86ab0"
const url = "https://newsapi.org/v2/"

const fetchArticles = (searchQuery) => {
    return fetch(`${url}everything?q=${searchQuery}&${apiKey}`)
        .then(response => response.json())
        .then(data => { return data.articles })
}

const fetchHeadlines = () => {
    return fetch(`${url}top-headlines?country=us&${apiKey}`)
        .then(response => response.json())
        .then(data => { return data.articles })
}

module.exports = { fetchArticles, fetchHeadlines }
