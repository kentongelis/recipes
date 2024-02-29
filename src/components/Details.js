import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

function Details() {
    const params = useParams();
    const [meal, setMeal] = useState({});
    const { id } = params;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res=>res.json())
        .then(data=>{setMeal(data.meals[0])});
    const renderList = () => {
        const listItems = []
        for (let i = 1; i <= 20; i++) {
            if (meal[`strMeasure${i}`]) {
                listItems.push(<li>{meal[`strMeasure${i}`]} {meal[`strIngredient${i}`]}</li>);
            } else {
                break;
            }
        }
        return listItems;
    };

    return (
        <div>
            <h1>{meal['strMeal']}</h1>
            <img src={meal['strMealThumb']} width='300' alt=''></img>

            <ul>{renderList()}</ul>

            <fieldset>
                <legend>Instructions</legend>
                <p>{meal['strInstructions']}</p>
            </fieldset>
            
            <h3>Watch a video <Link to={meal['strYoutube']}>here</Link>!</h3>
        </div>
    )
}

export default Details