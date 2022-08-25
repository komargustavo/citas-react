import Paciente from "./Paciente";

const ListadoPacientes = () => {
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      <h2 className="text-center font-black text-2xl">Listado de Pacientes</h2>
      <p className="text-lg text-center mt-3 mb-3">
        Administra tus {""}
        <span className="font-bold text-indigo-600">pacientes y citas</span>
      </p>
      <Paciente/>
    </div>
  );
};

export default ListadoPacientes;
