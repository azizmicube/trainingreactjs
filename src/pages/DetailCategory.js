import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import Card from '../reusable/Card';

const DetailCategory = () => {
    const params = useParams();
    const [meals, setMeals] = useState(null);

    const getData = async (categoryName) => {
        const data = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+categoryName);
        const result = await data.json();
        setMeals(result.meals);
    }

    useEffect(() => {
        getData(params.category);
    }, [])    

  return (
    <div>
        <h3>Detail Category Page</h3>
        <div>
            <h5>Kategori {params.category}</h5>
            {
                meals && meals.length > 0 ? (
                    <div style={{display: 'flex', flexWrap: 'wrap'}}>
                        {
                            meals.map(meal => (
                                <Card key={meal.idMeal} imageSrc={meal.strMealThumb} title={meal.strMeal}/>
                            ))
                        }
                    </div>
                 ) : (
                    <p>Loading...</p>
                 )
            }
        </div>
    </div>
  )
}

export default DetailCategory