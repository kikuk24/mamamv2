/* eslint-disable react/prop-types */
const Product = (props) => {
  const { products } = props
  return (
    <div className="bg-gray-400 min-h-screen py-5 px-4">
      <div className="flex flex-wrap w-full items-center justify-center gap-4">
        {products?.map((val, index) => <div className="w-80 rounded-lg p-4 bg-white" key={index}>
        <img src={val.image} alt="" className="rounded-t-sm w-full h-48" />
        <h1 className="text-2xl font-semibold line-clamp-1">{val.brand}</h1>
        <p className="text-sm my-2 line-clamp-3">{val.description}</p>
        <p>Rp.{val.price.toLocaleString()}</p>
          <div className="flex gap-4 items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1" onClick={() => props.addToCart(val)}>+ Cart</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-1">Buy</button>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Product