import React from "react"
import PropTypes from 'prop-types';


const Article = ({ author, title, description }) => {

    return (
        <div>
            <hr />
            {author ?
                <p>{`author: ${author}`}</p>
                :
                <></>
            }
            <p>{`title: ${title}`}</p>
            <p>{`description: ${description}`}</p>
        </div>
    )

}

Article.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string
}

export default Article;
