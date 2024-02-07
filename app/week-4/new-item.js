"use client";

import {useState} from "react";

export default function NewItem (){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        const item = {name, quantity, category};
        console.log(item);

        alert(`Item added\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <main>
            <div className="flex items-center justify-center">
                <div className="w-full max-w-md p-2 mt-4 bg-blue-800/20">
                    <form onSubmit={handleSubmit}>
                    <input
                        className="block w-full text-black rounded-lg p-2 mb-2"
                        required
                        value={name}
                        type="text"
                        placeholder="Item name"
                        onChange={handleNameChange}
                        />
                    <div className="flex flex-row justify-between">
                    <input
                        className="w-1/5 text-black rounded-lg p-2 mb-4" 
                        required
                        type="number"
                        min="1"
                        max="99"
                        value={parseInt(quantity)}
                        onChange={handleQuantityChange}
                    />
                    <select
                        className="w-2/5 text-black rounded-lg p-2 mb-4"
                        value={category}
                        onChange={handleCategoryChange}>
                        <option disabled value="Category">Category</option>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned Goods">Canned Goods</option>
                        <option value="Dry Goods">Dry Goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                    </div>
                    <button className="w-full font-bold bg-blue-500 rounded-lg p-2 hover:bg-blue-800 focus:outline-none active:outline-indigo-500/50">+</button>
                    </form>
                </div>
            </div>
        </main>
    );
};