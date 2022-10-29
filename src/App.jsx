import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AuthLayout from './layouts/AuthLayout';

import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlviderPassword from './paginas/OlviderPassword';
import NuevoPassword from './paginas/NuevoPassword';
import ConfirmaCuenta from './paginas/ConfirmaCuenta';


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="olvider-password" element={<OlviderPassword />} />
          <Route path="olvider-password/:token" element={<NuevoPassword />} />
          <Route path="confirmar/:id" element={<ConfirmaCuenta />} />
        </Route>

      </Routes>


    </BrowserRouter>
  )
}

export default App
