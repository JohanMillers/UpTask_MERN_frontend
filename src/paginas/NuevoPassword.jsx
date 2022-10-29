const NuevoPassword = () => {
  return (
    <>
    <h1 className="text-sky-600 font-black text-6xl capitalize">Restablece tu password y no pierda acceso a tus {''}
      <span className="text-slate-700">Proyectos</span>
    </h1>

    <form className="my-10 bg-white shadow rounded-lg p-10">
      <div>
        <label
          className="uppercase text-gray-600 block text-xl font-bold"
          htmlFor="password"
        
        >Nuevo Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Escribe tu Nuevo Password"
          className="w-full my-3 p-3 border rounded-xl bg-gray-50"
          />
          </div>

      <input
        type="submit"
        value="Guarda Nuevo Password"
        className="bg-sky-700 w-full py-3 my-3 mb-5 text-white uppercase font-bold rounded 
        hover:cursor-pointer hover:bg-sky-800 hover: transition-colors"
      />

    </form>
  </>
  )
}

export default NuevoPassword