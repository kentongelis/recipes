import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Random() {
    const navigate = useNavigate()
    const [random, setRandom ] = useState()
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data => {setRandom(data.meals[0]['idMeal'])})

    return (
        <div>
            <button className="Random" onClick={(e) => {
                navigate(`/recipe/${random}`)
            }}><div className="Random-Word">Random Recipe</div></button>
        </div>
        )
}

export default Random