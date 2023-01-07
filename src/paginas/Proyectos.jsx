import useProyectos from "../hooks/useProyectos"
import PreviewProyecto from "../componets/PreviewProyecto";

const Proyectos = () => {

  const { proyectos } = useProyectos();


  return (
    <>
      <h1 className='text-4xl font-black'>Proyectos</h1>

      <div className="bg-white shadow mt-10 rounded-lg">
        {proyectos.length ? 
          proyectos.map(proyecto => (
            <PreviewProyecto
              key={proyecto._id}
              proyecto={proyecto}


            />
        ))
          : <p className="text-center text-gray-600 uppercase p-5"> No Hay proyectos aun </p>}
      </div>
      
      

    </>
  )
}

export default Proyectos