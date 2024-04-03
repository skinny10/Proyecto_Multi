import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";
import HeaderLogin from "./components/Login/HeaderLogin/HeaderLogin.jsx";
import FormLogin from "./components/Login/FormLogin/FormLogin.jsx";
import FormRegister from "./components/Register/FormRegister/FormRegister.jsx";
import Login from "./components/Login/Login.jsx";
import Register from "./components/Register/Register.jsx";
import PhotoPerfil from "./components/Perfil/PhotoPerfil/PhotoPerfil.jsx";
import AboutMe from "./components/Perfil/AboutMe/AboutMe.jsx";
import Perfil from "./components/Perfil/Perfil.jsx";
import CreatePublication from "./components/UI/CreatePublication/CreatePublication.jsx";
import OptionHeader from "./components/UI/OptionHeader.jsx";
import HomeComponents from "./components/Home/HomeComponets.jsx";

function App() {
  return (
    <AuthProvider>

        <BrowserRouter>
       
            <Routes>
              
              <Route path="/" element={<Login/>} />
              <Route path="/register" element={<Register/>}/>
              
              <Route element={<ProtectedRoute />}>
                 <Route path="/perfil" element={<Perfil/>}/>
                 <Route path="/home" element={<HomeComponents/>}/>
              </Route>

            </Routes>
       
        </BrowserRouter>
    
    </AuthProvider>
  );
}

export default App;
