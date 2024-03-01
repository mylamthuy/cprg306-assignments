'use client';
import {useState} from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page(){
    const [items, setItems] = useState(itemsData);
    const handleAddItem = (newItem) => {
        setItems( prevItems => [...prevItems, newItem]);
    };
    //bg-blue-800/20

    return (
        <main className="m-2 p-2 bg-slate-950">
            <div >
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
            </div>
        </main>
    )
}