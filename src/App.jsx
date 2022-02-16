import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import AuthLayout from "./layouts/AuthLayout"
import Registro from "./pages/auth/Registro"
import MainLayout from "./layouts/MainLayout"
import Inicio from "./pages/Inicio"
import Socios from "./pages/Socios"
import Delegados from "./pages/Delegados"
import Servicios from "./pages/Servicios"
import Descargas from "./pages/Descargas"
import Contacto from "./pages/Contacto"
import LogIn from "./pages/auth/LogIn"
function App() {
  
  return (
    <div>
      <Routes>
        <Route element={<MainLayout/>}>
          <Route index element={<Inicio/>}/>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/socios" element={<Socios/>}/>
          <Route path="/delegados" element={<Delegados/>}/>
          <Route path="/servicios" element={<Servicios/>}/>
          <Route path="/descargas" element={<Descargas/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="login" element={<LogIn/>}/>
          <Route path="registro" element={<Registro/>}/>
        </Route>
      </Routes>
      
      
    </div>
  )
}

export default App
