import useProyectos from "../hooks/useProyectos"

const Colaborador = ({colaborador}) => {
    const { handleModalEliminarColaborador } = useProyectos()

    const {  nombre, email } = colaborador

    return (
        <div className="border-b p-5 flex justify-between items-center">
            <div>
                <p>{nombre}</p>
                <p className="text-sm text-gray-700">{email}</p>
            </div>

            <div>
                <button
                    type="button"
                    className="px-4 py-3 text-gray-800 uppercase font-bold text-sm rounded-lg hover:text-red-600"
                    onClick={() => handleModalEliminarColaborador(colaborador)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
              </button>
            </div>
        </div>
    )
}

export default Colaborador