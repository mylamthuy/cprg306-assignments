export default function Item({prop, onSelect}){
    return (
    <div onClick={() => onSelect()} className=" bg-slate-900 max-w-sm m-4 p-2 hover:bg-orange-700">
        <h1 className="text-xl font-bold">{prop.name}</h1>
        <p className="text-sm">Buy {prop.quantity} in {prop.category}</p>
    </div>
    )
}