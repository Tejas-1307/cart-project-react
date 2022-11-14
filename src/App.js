import React, { useState } from "react";
import data from "./component/back/Data/Data";
import Header from "./component/font/Header/Header";
import Routes  from "./component/font/Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import Products from "./component/font/Products/Products";

const App = () => {
  const {productItem}=data;
  const [cartItem,setCartItem]=useState([ ])

  const handleAddProduct = (product) =>{
    const ProductExist  = cartItem.find((item)=> item.id=== product.id);
    if(ProductExist){
      setCartItem(cartItem.map((item) => item.id === product.id ?
      {...ProductExist,quantity:ProductExist.quantity+1}:item)
      );
    }
    else{
      setCartItem([...cartItem,{...product,quantity:1}])    }
    
  }

  const handleRemoveProduct = (product) => {
    const ProductExist  = cartItem.find((item)=> item.id=== product.id);
    if(ProductExist.quantity === 1){
      setCartItem(cartItem.filter((item) => item.id != product.id))
    }else{
      setCartItem(
        cartItem.map((item)=> item.id === product.id ? {...ProductExist,quantity: ProductExist.quantity-1}:item)
      )
    }
  }

  const handleCartClearance = () =>{
    setCartItem([]);
  }
  return(
    <div>
      <Router>
       <Header/>
       <Routes productItem={productItem} cartItem ={cartItem}
        handleAddProduct={handleAddProduct} 
        handleRemoveProduct={handleRemoveProduct}
        handleCartClearance={handleCartClearance}/>
      </Router>
    </div>
  )
}

export default App;