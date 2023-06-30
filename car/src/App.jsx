import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCar from "./pages/AddCar";
import Admin from "./pages/Admin";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/add' element={<AddCar/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
