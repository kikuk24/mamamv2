import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import HomeRedux from "./pages/HomeRedux"
import ProductPage from "./pages/ProductPage"
function App() {

  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/redux" element={<HomeRedux />} />
        <Route path="/product" element={<ProductPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
