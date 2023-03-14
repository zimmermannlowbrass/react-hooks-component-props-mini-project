import React from "react";


function Article({date, preview, title, minutes}) {

    function miniEmoji() {
        if (minutes < 30) {
            let coffees = '☕️'
            for (let x = 1; x < Math.ceil(minutes / 5); x++) {
                coffees = coffees + '☕️'
            }
            return coffees
        }
        else {
            let foods = '🍱'
            for (let x = 0; x < Math.floor(minutes / 10); x++) {
                foods = foods + '🍱'
            }
            return foods
        }
    }

    return(
        <article>
            <h3>{title}</h3>
            <small>
                {date ? date: "January 1, 1970"} - {minutes + ' minute read '} {miniEmoji()}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;