import { useState } from "react"
import { Link } from "react-router-dom"
import Alerta from "../componets/Alerta"
import axios, { Axios } from 'axios'



const Registrar = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repetirPassword, setRepetirPassword] = useState('');
  const [alerta,setAlerta]= useState({})

  const handleSubmint = async e => {
    e.preventDefault();

    //Valida campo

    if ([nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
    if(password !== repetirPassword ) {
      setAlerta({
          msg: 'Los password no son iguales',
          error: true
      })
      return
  }

  if(password.length < 6 ) {
      setAlerta({
          msg: 'El Password es muy corto, agrega minimo 6 caracteres',
          error: true
      })
      return
  }

    setAlerta({})
    
    //Crear usuario en la API
    try {
      const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,
        { nombre, email, password })
      
      setAlerta({ 
        msg: data.msg,
        error: false
      });
      
      setNombre('')
      setEmail('')
      setPassword('')
      setRepetirPassword('')
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
      
    }

  }
  const { msg } = alerta

  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu Cuenta y Administra tus {''}
      <span className="text-slate-700">Proyectos</span>
      </h1>

      {msg && <Alerta alerta={alerta}/>}
      
      

      <form className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmint}
      
      >
      <div>
        <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="nombre"
        
        >Nombre
        </label>
        <input
          id="nombre"
          type="text"
          placeholder="Ingresa su nombre"
          className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        
        <div>
          <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="email"
        
        >Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            value={email}
            onChange={e => setEmail(e.target.value)}
        
        />
      </div>

      <div>
        <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password"
        
        >Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Introducer tu password"
            className="w-full my-3 p-3 border rounded-xl bg-gray-50"
            value={password}
            onChange={e =>setPassword(e.target.value)}
          />

        </div>
        
          <div>
          <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password2"
        
        >Repetir Password
        </label>
        <input
          id="password2"
          type="password"
          placeholder="Repirte tu password"
            className="w-full my-3 p-3 border rounded-xl bg-gray-50"
            value={repetirPassword}
            onChange={e =>setRepetirPassword(e.target.value)}
        /> 
      </div>

      <input
        type="submit"
        value="Crear Cuenta"
        className="bg-sky-700 w-full py-3 my-3 mb-5 text-white uppercase font-bold rounded 
        hover:cursor-pointer hover:bg-sky-800 hover: transition-colors"
        />
    </form>

    <nav className=" lg:flex lg:justify-between">
      <Link
        className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="/"
      
      >¿Ya tiene una cuenta? Inicia secion</Link>

      <Link
      className="block text-center my-5 text-slate-500 uppercase text-sm"
        to="/olvider-password"
      >Olvider Mi Password</Link>
    </nav>
  </>

  )
}

export default Registrar