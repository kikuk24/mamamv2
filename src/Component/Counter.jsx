import { useDispatch } from "react-redux";
import { increment, decrement, updateCounter } from "../services/slices/counterSlices";
import { useState } from "react";
const Counter = () => {
  const dispatch = useDispatch()
  const [counter, setCount] = useState(0)
  const updateCount = (e) => {
    e.preventDefault()
    dispatch(updateCounter(counter))
  }
  
  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="font-bold text-xl">Redux Tolkit Tutorial</h1>
      <p>Counter
        : {counter}</p>
      <div className="flex gap-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>Increment</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div className="my-5">
        <form action="" onSubmit={updateCount}>
          <input type="number" className="border border-gray-400 rounded p-2 mx-2" onChange={e => setCount(e.target.value)} />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Counter