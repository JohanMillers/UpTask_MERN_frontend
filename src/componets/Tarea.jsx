import { formatearFecha } from "../helpers/formatearFecha"
import useProyectos from "../hooks/useProyectos"
import useAdmin from "../hooks/useAdmin";

const Tarea = ({ tarea }) => {

    const { handleModalEditarTarea, handleModalEliminarTarea, completaTarea } = useProyectos();
    const admin = useAdmin();
    
    const { descripcion, nombre, prioridad, fechaEntrega, estado, _id } = tarea

  return (
    <div className="border-b p-5 flex justify-between items-center">
            <div className="flex flex-col  items-start">
                <p className="mb-1 text-xl">{nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercase">{descripcion}</p>
                <p className="mb-1 text-sm">{ formatearFecha(fechaEntrega) }</p>
                <p className="mb-1 text-gray-600">Prioridad: {prioridad}</p>
                { estado && <p className="text-xs bg-green-600 uppercase p-1 rounded-lg text-white">Completada por: {tarea.completado}</p>}
          </div>

          <div className="flex flex-col lg:flex-row gap-2">
              {admin && (
                
                    <button
                        className="px-4 py-3 text-gray-800 uppercase font-bold text-sm rounded-lg hover:text-black"
                        onClick={() => handleModalEditarTarea(tarea)}
                   >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>
                    </button>
                  )}

                

                    <button
                    className={`${estado ? 'bg-sky-600' : 'bg-gray-600'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
                    onClick={() => completaTarea(_id)}
                >{estado ? 'Completa' : 'Incompleta'}</button>
                
              {admin && (
                    <button
                        className=" px-4 py-3 text-gray-800 uppercase font-bold text-sm rounded-lg hover:text-red-600"
                        onClick={() => handleModalEliminarTarea(tarea)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                  </button>
                )}
            </div>
        </div>
  )
}

export default Tarea