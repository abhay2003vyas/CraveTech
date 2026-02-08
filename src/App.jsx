import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
// later we will add Navbar & Footer
function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  );
}

export default App;
