import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import AllUser from "./components/AllUser";
import NotFound from "./components/NotFound";


function App() {
  return (
    <>
      <div className="container-fluid p-0" style={{ height: "100vh" }}>
        <Header />
        <BrowserRouter>
          <Routes>
         
               <Route path="/" element={<Home/>}/>
               <Route path="/login" element={<Login/>}/>
               <Route path="/details" element={<AllUser/>}/>
               <Route path="*" element={<NotFound/>}/>
       
        </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
