"use client";
import Item from "./item";
import {useState} from "react";
import ItemData from "./item.json";

export default function ItemList(){
    const [sortBy, setSortBy] = useState("name");
    //const [bgColor, setBgColor] = useState("bg-orange-400");

    const sortedItems = [...ItemData];

        if (sortBy === "name"){
            sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        }
        else if (sortBy === "category"){
            sortedItems.sort((a, b) => a.category.localeCompare(b.category));
        }
        

      return(
        <div>
            <div className="flex flex-row">
                <p className="py-2 px-4 my-2">Sort by: </p>
                <button className={`text-white rounded py-2 px-6 m-2 w-28 ${sortBy === "name" ? "bg-orange-700" : "bg-orange-400"}`}
                        onClick={() => {setSortBy("name")}}>Name</button>
                <button className={`text-white rounded py-2 px-6 m-2 w-28 ${sortBy === "category" ? "bg-orange-700" : "bg-orange-400"}`}
                        onClick={() => {setSortBy("category")}}>Category</button>
                
                
            </div>
            {sortedItems.map((item) => <Item prop={item} key={item.id}></Item>)}
        </div>
      )
}