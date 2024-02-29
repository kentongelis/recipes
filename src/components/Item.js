import React from 'react';
import { Link } from 'react-router-dom'

function Item(props) {
    const data = props
    return (
        <div className="card">
            <img src={data.data.strMealThumb} width="300" alt=''></img>
            <div className='info'>
                <h1><Link classname="Detail-link" to={`/recipe/${data.data.idMeal}`}> { data.data.strMeal }</Link></h1>
            </div>

        </div>
    )
}

export default Item;