export default function Item({prop}){
    return (
    <div className=" bg-blue-500/20 max-w-sm m-4 p-2">
        <h1 className="text-xl font-bold">{prop.name}</h1>
        <p className="text-sm">Buy {prop.quantity} in {prop.category}</p>
    </div>
    )
}