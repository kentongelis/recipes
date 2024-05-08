import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import './Details.css'

function Details() {
    const params = useParams();
    const [meal, setMeal] = useState({});
    const { id } = params;

    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    {headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }})
        .then(res=>res.json())
        .then(data=> {
            setMeal(data.meals[0])
            console.log(data)
        });

    const renderList = () => {
        const listItems = []
        for (let i = 1; i <= 20; i++) {
            if (meal[`strMeasure${i}`]) {
                    if (meal[`strMeasure${i}`] !== " ") {
                    // let str = `${meal[`strMeasure${i}`]} ${meal[`strIngredient${i}`]}`
                    listItems.push(<li>{meal[`strMeasure${i}`]} {meal[`strIngredient${i}`]}</li>);
                }
            } else { break }
        }
        return listItems;
    };

    return (
        <main>
            <div className="details">
                <div className="containerLeft">
                    <h1>{meal['strMeal']}</h1>
                    <img src={meal['strMealThumb']} width='300' alt=''></img>
                </div>
                <div className="containerMiddle">
                    <h2>Ingredients</h2><br></br>
                    <ul>{renderList()}</ul>
                </div>
                <div className="containerRight">
                    <h2>Instructions</h2>
                    <p>{meal['strInstructions']}</p>
                </div>
            </div>
            <h3>Watch a video <Link to={meal['strYoutube']}>here</Link>!</h3>
        </main>
    )
}

export default Details