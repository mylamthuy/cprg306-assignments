"use client";

import { useState, useEffect } from "react";


async function fetchMealIdeas(ingredient) {
    try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
    if (!response.ok) {
        throw new Error("HTTP error. Status: " + response.status);
    }
    const data = await response.json();
    return data.meals;
    } catch (error) {
        console.error(error);
    }
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealsIdeas(){
        try {
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (ingredient === "") return;
        loadMealsIdeas(ingredient);
    }, [ingredient]);


    return (
        <div>
            <h1 className="text-xl font-bold">Meal Ideas</h1>

            {meals !== null ? (
                ingredient === ' ' ? (
                <h2>Select an item to get meal ideas</h2>
                ) : (
                <div>
                    <h2>Here are some meal ideas using {ingredient}:</h2>
                    <ul>
                        {meals.map((meal) => (
                            <li key={meal.idMeal}
                                className=" bg-slate-900 max-w-sm m-1 p-2 hover:bg-orange-700">
                                {meal.strMeal}
                            </li>
                        ))}
                    </ul>
                </div>
                )
            ) : <h2>No meal ideas found for {ingredient}</h2>
            }
        </div>
    )
}