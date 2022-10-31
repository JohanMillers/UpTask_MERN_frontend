import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';

import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlviderPassword from './paginas/OlviderPassword';
import NuevoPassword from './paginas/NuevoPassword';
import ConfirmaCuenta from './paginas/ConfirmaCuenta';
import Proyectos from './paginas/Proyectos';

import { AuthProvider } from './context/AuthProvider';



function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvider-password" element={<OlviderPassword />} />
          <Route path="olvider-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmaCuenta />} />
          </Route>
          
          <Route path="/proyectos" element={<RutaProtegida />} >
            <Route index element={<Proyectos />} />

          </Route>

      </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
