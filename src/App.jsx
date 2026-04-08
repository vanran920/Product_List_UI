import { useEffect, useState } from "react"
import ProfileCollection from "./Components/ProfileCollection"
const App = () => {
    
    const products = [
      {
        id: 1, 
        name: "Shoes", 
        price: 900, 
        image: "src/assets/ShoeImages.jpg",
        ratings: 4.3, 
        catogory: "Shoes"
      }, 
      {
        id: 2, 
        name: "T-Shirt", 
        price: 500, 
        image: "src/assets/T-ShirtImage.jpg",
        ratings: 4.8, 
        catogory: "Clothes"
      }, 
      {
        id: 3, 
        name: "Watch", 
        price: 1999, 
        image: "src/assets/WatchImage.jpg",
        ratings: 5.0, 
        catogory:  "Accessories"
        
      }, 
      {
        id: 4, 
        name: "Jeans", 
        price: 1500, 
        image: "src/assets/Jeans.jpg",
        ratings: 4.8, 
        catogory: "Clothes"
      }, 
    ] 

    const [selectCategory, setSelectCategory] = useState("All") 


    
  const filterProducts = selectCategory === 'All' ? products : products.filter((item) => item.catogory === selectCategory )


  return (
    <div> 
          <div className="flex gap-4 p-4 " >
                <button onClick={() => setSelectCategory("All")} >All</button>
                <button onClick={() => setSelectCategory("Shoes")}>Shoes</button>
                <button onClick={() => setSelectCategory("Clothes")}>Clothes</button>
                <button onClick={() => setSelectCategory("Accessories")}>Accessories</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6" >
              {
                filterProducts.map((item) => {
                    return <ProfileCollection  key={item.id} image={item.image} name={item.name} price={item.price} ratings={item.ratings}  />
                  })
              }
          </div>
    </div>
  )
}

export default App
