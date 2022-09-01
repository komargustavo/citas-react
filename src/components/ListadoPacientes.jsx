import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente }) => {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll m-3">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-2xl">
            Listado de Pacientes
          </h2>
          <p className="text-lg text-center mt-3 mb-3">
            Administra tus {""}
            <span className="font-bold text-indigo-600">pacientes y citas</span>
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              key={paciente.id}
              paciente={paciente}
              setPaciente={setPaciente}
            />
          ))}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-2xl">No hay Pacientes</h2>
          <p className="text-lg text-center mt-3 mb-3">
            Comienza agregando pacientes {""}
            <span className="font-bold text-indigo-600">
              y apareceran en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;
