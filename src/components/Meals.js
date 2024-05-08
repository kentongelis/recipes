import React from 'react';
import { useState } from 'react';
import Item from './Item.js';
import TenRandom from './TenRandom.js'
import './Meals.css';

function Meals () {
    const [search,setSearch] = useState('');
    const [meal, setMeal] = useState();

    const searchMeal=(evt)=>{
        if(evt.key==='Enter')
        {
          fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
          {headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
          }})
          .then(res=>res.json())
          .then(data=>{
              console.log(data)
            setMeal(data.meals)
          })
        }
    }
  
    return(
        <main className='main'>
            <div className="middle">
                <div className='header'>
                    <h1>Search for a food recipe</h1>
                </div>
                <div className="seachBox">
                    <input 
                    type="search" 
                    className="search-bar" 
                    value = {search} 
                    placeholder='Enter Meal' 
                    onChange={(e)=>setSearch(e.target.value)}
                    onKeyDown={searchMeal}/>
                </div>
            </div>
            <div className='container'>
               {
                (meal==null) ? <TenRandom /> : meal.map((res)=>{
                    return(
                        <Item data={res}/>
                    )
                    })
               }
            </div>
        </main>
        ) 
  }
  


export default Meals;