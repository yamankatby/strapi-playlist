import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}
