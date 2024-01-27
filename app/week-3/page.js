import ItemList from "./item-list";

export default function Page(){
    return (
        <main>
            <h1 className="text-3xl font-bold mt-3 ml-2">Shopping List</h1>
            <ItemList />
        </main>
    )
}