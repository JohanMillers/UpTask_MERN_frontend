import FormularioColaborador from "../componets/FormularioColaborador"

const NuevoColaborador = () => {
  return (
      <>
          <h1 className="text-4xl font-black">Añadir Colaborador(a) al Proyecto: </h1>

          <div className="mt-10 flex justify-center">
                <FormularioColaborador />
          </div>

      </>
  )
}

export default NuevoColaborador