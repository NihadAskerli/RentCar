import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignUp/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
