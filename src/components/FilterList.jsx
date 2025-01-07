import { useMemo, useState } from "react";
import Modal from "./Modal";
import style from "./FilteList.module.css";
import items from "../data/products.json";
function FilterList() {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [products, setProducts] = useState(items);
  const [result, setResult] = useState([]);
  const [search, setSearch] = useState("")
  const openModal = () => {
    setModalVisibility(true);
  };

//   const filterProducts = (event) => {
//     const valueInput = event.target.value.trim();
//     let filteredProducts = [...products];
//     filteredProducts = filteredProducts.filter(
//       (product) => product.price === Number.parseInt(valueInput)
//     );

//     setResult(filteredProducts);
//     console.log("Викликалася функція фільтрації");

//     return filteredProducts;
//   };
    const handleChangeInput = (event) => {
        const valueInput = event.target.value
        setSearch(valueInput)
        
    }

    const filterProducts = useMemo(() => {
    
        let filteredProducts = [...products];
        filteredProducts = filteredProducts.filter(
          (product) => product.name.includes(search)
        );
    
        console.log("Викликалася функція фільтрації");
    
        return filteredProducts;
      }, [search, products])
  

  return (
    <>
      <div className={style.listWrap}>
        <input
          onChange={handleChangeInput}
          className={style.input}
          type="text"
          placeholder="Find you things"
        />
        <ul className={style.List}>
          {filterProducts.map((item) => (
            <li className="listItem" key={item.id}>
              <p className="nameListItem">{item.name}</p>
              <p className="priceListItem">{item.price}</p>
              <img
                className={style.imageListItem}
                alt={item.name}
                src={item.src}
              />
              <button onClick={openModal}>Купити</button>
            </li>
          ))}
        </ul>
      </div>
      {modalVisibility && <Modal modalVisibility={setModalVisibility} />}
    </>
  );
}
export default FilterList;
