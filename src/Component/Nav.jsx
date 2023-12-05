/* eslint-disable react/prop-types */

const Nav = (props) => {
  const { cartCount, cartClick} = props
  
  return (
    <div className="w-full h-[70px] bg-orange-200 flex justify-between px-9 items-center">
      <h1 className="cursor-pointer">Mamam</h1>
      <h1 className="cursor-pointer" onClick={cartClick}>Keranjang</h1>
      {cartCount?.length?<span className="absolute w-[20px] h-[20px] rounded-[50%] bg-red-500 flex items-center justify-center right-[20px] top-[20px] text-white">{cartCount.length}</span>:null}
    </div>
  )
}

export default Nav