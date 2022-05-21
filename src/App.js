import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <h1>Apparatus Store - Get Tools Now</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
