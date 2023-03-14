import React from "react";
import Article from "./Article";

function ArticleList({posts}) {

    const articleMaster = posts.map(post => {
        return(
            <Article
            key = {post.id}
            post ={post}
            title = {post.title}
            preview = {post.preview}
            date = {post.date} 
            minutes = {post.minutes}
            />
        )
    })

    return (
        <main>{articleMaster}</main>
    )
}

export default ArticleList;