import storeItems from "../data/items.json"

const Store = () => {
  return (
    <div className="store__container">
        <ul>{storeItems.map(item => (
            <li>{JSON.stringify(item)}</li>  
            ))}
        </ul>
    </div>
  )
}

export default Store