import {useEffect} from 'react'
import useProyectos from "../hooks/useProyectos"
import { useParams, Link } from 'react-router-dom'

import FormularioProyecto from '../componets/FormularioProyecto'

const EditarProyecto = () => {
    const params = useParams();
    const { obtenerProyecto, proyecto ,cargandos} = useProyectos();

    useEffect(() => {
        obtenerProyecto(params.id)
        
    },[])
    
    const { nombre } = proyecto;
    if(cargandos) return 'Cargando...'

    return (
      <>
            <h1 className="font-black text-4xl">Editar Proyecto : {nombre}</h1>
            
            <div className="mt-10 flex justify-center">
                <FormularioProyecto/>
            </div>
      
      </>
  )
}

export default EditarProyecto