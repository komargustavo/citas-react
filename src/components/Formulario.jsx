const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5 ">
      <h2 className="font-black text-3xl text-center ">
        Seguimiento Pacientos
      </h2>
      <p className="text-lg text-center mt-3 mb-3">
        Añade Pacientes y {""}
        <span className=" font-bold text-indigo-600 ">Administralos</span>
      </p>

      <form className=" bg-white rounded-lg shadow-md py-10 px-5">
        <div className="mb-3">
          <label
            htmlFor="mascota"
            className=" block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            className="border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="propietario"
            className=" block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            className="border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
            id="propietario"
            type="text"
            placeholder="Nombre del propietario"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className=" block text-gray-700 uppercase font-bold"
          >
            E-Mail
          </label>
          <input
            className="border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
            id="email"
            type="email"
            placeholder="E-Mail contacto propietario"
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="alta"
            className=" block text-gray-700 uppercase font-bold"
          >
            Fecha del Alta
          </label>
          <input
            className="border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
            id="alta"
            type="date"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
