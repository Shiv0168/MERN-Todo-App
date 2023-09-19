import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import View from "./components/pages/View";
import Update from "./components/pages/Update";
import Navigationbar from "./components/pages/Navigationbar";
import Add from "./components/pages/Add";

function App() {
  return (
    <div>
      <Navigationbar />
      <Routes>
        <Route path="/" element={<View />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:_id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
