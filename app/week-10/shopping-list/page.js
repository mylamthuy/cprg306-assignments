'use client';
import { useUserAuth } from "../_utils/auth-context";
import {useState, useEffect} from "react";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import {getItems, addItem} from "../_service/shopping-list-service";

export default function Page(){
    const { user } = useUserAuth();

    if (!user) {
        return (
            <div>
                <p>You need to be signed in to view this page.</p>
            </div>
        )
    }
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState(' ');
    
    const handleItemSelect = (item) => {
        var itemName = item.name.toLowerCase();
        itemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        itemName = itemName.split(',')[0];
        setSelectedItemName(itemName);        
    }

    useEffect(() => {
        const loadItems = async () => {
            const items = await getItems(user.uid);
            setItems(items);
        };
        loadItems();
      }, [user, items]);

    const handleAddItem = (item) => {
        addItem(user.uid, item);
    }


    return (
        <div className="m-2 p-2 bg-slate-950">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <div className="flex">
                <div className="flex-1 max-w-sm m-2">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList onItemSelect={handleItemSelect} items={items}/>
                </div>
                <div className="flex-1 max-w-sm m-2">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </div>
    )
}