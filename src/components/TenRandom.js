import { useEffect, useState } from 'react';
import Item from './Item.js';

function TenRandom() {
    const [randomItems, setRandomItems] = useState([])
    useEffect( () => {
        const responseArray = []
        for (let i = 0; i < 10; i+=1) {
            responseArray.push(fetch('https://www.themealdb.com/api/json/v1/1/random.php',
            {headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }})
            .then(res => res.json()))
        } 
        console.log(responseArray)
        Promise.all(responseArray)
        .then(dataArray => {
            setRandomItems(() => dataArray.map( (meal) => {
                console.log(meal['meals']['0'])
                return <Item data={meal['meals']['0']}/>
            })
        )}
    )}, [])

    return randomItems
}

export default TenRandom