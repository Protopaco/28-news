import React from "react"
import Article from "../Article/Article.jsx"




const Articles = ({ articleList }) => {

    return (
        <div>
            {articleList ?
                articleList.map((article, index) => {
                    return <Article key={index} {...article} />
                })
                :
                <p>Loading!</p>
            }
        </div>
    )

}

export default Articles;