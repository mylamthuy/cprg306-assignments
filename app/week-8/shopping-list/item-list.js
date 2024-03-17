"use client";
import Item from "./item";
import {useState} from "react";

export default function ItemList({items, onItemSelect}){
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items];

        if (sortBy === "name"){
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (sortBy === "category"){
            sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        }

    const renderItems = () => {
        return sortedItems.map((item) =>
        <li key={item.id}>
            <Item onSelect={() => onItemSelect(item)} prop={item}></Item>
        </li>
        )}

      return(
        <div>
            <div className="flex flex-row my-4">
                <p className="py-2 px-4 my-2 text-lg">Sort by: </p>
                <button className={`text-white text-lg rounded p-2 m-2 w-28 ${sortBy === "name" ? "bg-orange-700" : "bg-orange-400"}`}
                        onClick={() => {setSortBy("name")}}>Name</button>
                <button className={`text-white text-lg rounded p-2 m-2 w-28 ${sortBy === "category" ? "bg-orange-700" : "bg-orange-400"}`}
                        onClick={() => {setSortBy("category")}}>Category</button>
            </div>
            <ul>
                {renderItems()}
            </ul>
        </div>
      )
}