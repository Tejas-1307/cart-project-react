import React from "react";
import Products from "../Products/Products"
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import { Switch,Route } from "react-router-dom";

const Routes = ({productItem,cartItem , handleAddProduct , handleRemoveProduct ,handleCartClearance}) =>{
    return(
       <div>
            <Switch>
                <Route path="/" exact>
                <Products productItem={productItem} handleAddProduct={handleAddProduct}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route>
                <Route path="/cart" exact>
                    <Cart cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}
                    handleCartClearance={handleCartClearance}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
