import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Users from "./Users";
import CreatUser from "./CreatUser";
import UpDateUser from "./UpDateUser";
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Users/>}></Route>
      <Route path="/create" element={<CreatUser/>}></Route>
      <Route path="/update" element={<UpDateUser/>}></Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
