export default function Item({name, quantity, category}){
    return (
    <div className=" bg-blue-500/20 max-w-sm m-4 p-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </div>
    )
}