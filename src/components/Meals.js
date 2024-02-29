import React from 'react';
import { useState } from 'react';
import Item from './Item.js';

function Meals () {
    const [search,setSearch] = useState('');
    const [meal, setMeal] = useState();
    const searchMeal=(evt)=>{
      if(evt.key==='Enter')
      {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
          setMeal(data.meals)
        })
      }
    }
  
    return(
        <div className='main>'>
            <div className='header'>
                <h1>Search for a food recipe</h1>
            </div>
            <div className="seachBox">
                <input type="search" className="search-bar" value = {search} placeholder='Enter Meal' onChange={(e)=>setSearch(e.target.value)} onKeyDown={searchMeal}>
                </input>
            </div>
            <div className='container'>
               {
                (meal==null)? <p></p> : meal.map((res)=>{
                    return(
                        <Item data={res}/>
                    )
                    })
               }
            </div>
        </div>
        )
    
  }
  


export default Meals;