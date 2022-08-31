const Paciente = ({ paciente, setPaciente }) => {
  const { nombre, propietario, email, fecha, sintomas } = paciente;
  return (
    <div className=" shadow-white m-3 bg-white rounded-lg px-5 py-10 ">
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Nombre: <span className=" font-normal normal-case">{nombre}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Propietario:{" "}
        <span className=" font-normal normal-case">{propietario}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        E-Mail: <span className=" font-normal normal-case">{email}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Fecha Alta: <span className=" font-normal normal-case">{fecha}</span>
      </p>
      <p className="mb-3 font-bold text-gray-700 uppercase">
        Sintomas: <span className=" font-normal normal-case">{sintomas}</span>
      </p>
      <div className=" flex justify-between mt-10">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-lg"
          onClick={() => {
            setPaciente(paciente);
          }}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 text-white uppercase font-bold hover:bg-red-700 cursor-pointer rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
