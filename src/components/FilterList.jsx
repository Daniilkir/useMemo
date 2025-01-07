import { useMemo, useState } from "react"
import style from "./FilteList.module.css"
import items from "../data/products.json"
function FilterList({modalVisibility}) {
    // const [search, setSearch] = useState("")
    const [products, setProducts] = useState(items)
    const [result, setResult] = useState([])
    const openModal = ()=>{
        modalVisibility(true)
    }

    
    const filterProducts = (event) => {
        console.log(event)
        const valueInput = event.target.value.trim()

        // setSearch(valueInput)
        let filteredProducts = [...products]
        filteredProducts = filteredProducts.filter((product) => product.price === Number.parseInt(valueInput))
        console.log(filteredProducts);
        setResult(filteredProducts)
        console.log("Викликалася функція фільтрації")
        // setProducts(filteredProducts)
        return filteredProducts
    }
    return (
        <div className={style.listWrap}>
            <input onChange={filterProducts} className={style.input} type="text" placeholder="Find you things" />
            <ul className={style.List}>
                {result.map((item) => (
                    <li className="listItem" key={item.id}>
                        <p className="nameListItem">{item.name}</p>
                        <p className="priceListItem">{item.price}</p>
                        <img className={style.imageListItem} alt={item.name} src={item.src} />
                        <button onClick={openModal}>Купити</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default FilterList;