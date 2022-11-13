import { useState, useEffect, createContext } from 'react'
import clienteAxios from '../config/clienteAxios';
import {useNavigate } from 'react-router-dom';

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {

    const [proyectos, setProyectos] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [proyecto, setProyecto] = useState({});
    const [cargandos, setCargandos] = useState(false);



    const navigate = useNavigate();

    useEffect(() => {
        const obtenerProyectos = async () => {
            try {
                const token = localStorage.getItem('token')
                 if (!token) return
            
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }
                const { data } = await clienteAxios('/proyectos', config)
                setProyectos(data)      
            } catch (error) {
                console.log(error);
                
            }
        }
        obtenerProyectos();

    },[])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        },4000)
    }

    const submitProyecto = async proyecto => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/proyectos', proyecto, config)
            setProyectos([...proyectos, data])

            setAlerta({
                msg: 'Proyecto Creando Correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/proyectos')    
            },3000)

            
        } catch (error) {
            console.log(error)    
        }
    }

    const obtenerProyecto = async id => {
       setCargandos(true)
        
        try {
            const token = localStorage.getItem('token')
            if (!token) return
            
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios(`/proyectos/${id}`, config)
            setProyecto(data);
            
            
        } catch (error) {
            console.log(error)
        } finally {
            setCargandos(false)
        }

    }





    return (
        <ProyectosContext.Provider
            value={{
                alerta,
                cargandos,
                proyecto,
                proyectos,
                mostrarAlerta,
                submitProyecto,
                obtenerProyecto

            }}
        
        >
            {children}

        </ProyectosContext.Provider>
    )
}

export {
    ProyectosProvider
}

export default ProyectosContext;