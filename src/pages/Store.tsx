import storeItems from "../data/items.json"
import StoreItem from '../components/StoreItem';

const Store = () => {
  return (
    <div className="store__container">
        <ul>{storeItems.map(item => (
            <li key={item.id}>
              <StoreItem {...item}/>
            </li>  
            ))}
        </ul>
    </div>
  )
}

export default Store