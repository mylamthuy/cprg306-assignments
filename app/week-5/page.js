import ItemList from "./item-list";

export default function Page(){
    return (
        <main>
            <div className="m-4">
            <h1 className="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList />
            </div>
        </main>
    )
}