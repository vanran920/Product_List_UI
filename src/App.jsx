import shoesImg from "./assets/ShoeImages.jpg";
import tshirtImg from "./assets/T-ShirtImage.jpg";
import watchImg from "./assets/WatchImage.jpg";
import jeansImg from "./assets/Jeans.jpg";

import { useEffect, useState } from "react"
import ProfileCollection from "./Components/ProfileCollection" 
const App = () => {
    
    
  const [products, setProducts] = useState([]) 
  
  useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data)
        })
  },[])

  const [selectCategory, setSelectCategory] = useState("All") 
  const filterProducts = selectCategory === 'All' ? products : products.filter((item) => item.category === selectCategory )


  return (
    <div> 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 sm: gap-4 p-4 " >
                <button onClick={() => setSelectCategory("All")} >All</button>
                <button onClick={() => setSelectCategory("men's clothing")}>men's clothing</button>
                <button onClick={() => setSelectCategory("jewelery")}>jewelery</button>
                <button onClick={() => setSelectCategory("electronics")}>electronics</button>
                <button onClick={() => setSelectCategory("women's clothing")}>women's clothing</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6" >
              {
                filterProducts.map((item) => {
                    return <ProfileCollection  key={item.id} image={item.image} name={item.title} price={item.price} ratings={item.rating.rate}  />
                  })
              }
          </div>
    </div>
  )
}

export default App
