import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import clienteAxios from '../config/clienteAxios'
import Alerta from '../componets/Alerta'
 
const NuevoPassword = () => {
  const [password, setPassword] = useState('')
  const [tokenValido, setTokenValido] = useState(false)
  const [alerta, setAlerta] = useState({})
  const [passwordModificado, setPasswordModificado] = useState(false)
 
  const params = useParams()
  const { token } = params 
 
  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken()
  }, [])
 
  const { msg } = alerta

  const handleSubmint = async e => {
    e.preventDefault()

    if(password.length < 6) {
      setAlerta({
          msg: 'El Password debe ser minimo de 6 caracteres',
          error: true
      })
      return
    }
    try {
      const url = `/usuarios/olvide-password/${token}`

      const { data } = await clienteAxios.post(url, { password });

      setAlerta({
        msg: data.msg,
        error: false
      })

      setPasswordModificado(true);
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      });
    }


  }
 
  return (
    <>
      <h1 className="text-sky-600 font-black text-4xl capitalize">Restablece tu Password 
        y no Pierdas Acceso a tus {''} <span className="text-slate-700"> proyectos</span>
      </h1>
 
      {msg && <Alerta alerta={alerta} />}
 
      { tokenValido && (
        <form
          className="my-10 bg-white shadow rounded-md p-10"
          onSubmit={handleSubmint}
        >      
          <div className="my-5">
            <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
            >Nuevo Password: </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu nuevo Password"
              className="w-full mt-3 p-3 border-2 rounded-xl bg-gray-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>        
 
          <input 
            type="submit"
            value="Guardar Nuevo Password"
            className="bg-sky-700 mb-5 w-full py-3 text-white hover:bg-sky-800
            rounded-xl uppercase font-bold hover:cursor-pointer transition-colors"
          />
        </form> 
      )}  
       {passwordModificado && (
            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/"
            >Inicia Sesión</Link>
          )}
    </>
  )
}
 
export default NuevoPassword