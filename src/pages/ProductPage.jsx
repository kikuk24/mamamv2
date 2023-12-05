import { useEffect, useState } from "react";
import Nav from "../Component/Nav"
import Product from "../Component/Product"
import Cart from "../Component/Cart"
import { useDispatch, useSelector } from "react-redux"
import { getProducts, addToCart, deleteItem } from "../services/slices/productSlices";
const ProductPage = () => {
  const dispatch = useDispatch()
  const { products, cart } = useSelector(state => state.products)
  const [open, setOpen] = useState(false)
  const cartClick = () => setOpen(!open)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  
  const addtoCart = (id) => {
    dispatch(addToCart(id))
  }
  const deleteitem = (id) => {
    dispatch(deleteItem(id))
  }
  return (
    <div>
      <Nav 
      cartClick={cartClick}
      cartCount={cart} />
      {open &&
        <Cart
          product={cart}
          deleteitem = {deleteitem}
        />}
      <Product
        products={products} addToCart={addtoCart}/>
    </div>
  )
}

export default ProductPage