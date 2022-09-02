import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    //Con "Object.keys(paciente)" compruebo si el objeto "paciente" esta vacio o no
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => {
    //genera el KeyId (Id) del objetoPaciente en forma aleatoria
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar Formulario
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }

    setError(false);
    // Creo el objetoPaciente con los datos que entran en el formulario
    const objetoPaciente = {
      nombre: nombre,
      propietario: propietario,
      email: email,
      fecha: fecha,
      sintomas: sintomas,
    };

    if (paciente.id) {
      //Editando reistro paciente
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({})
    } else {
      //Nuevo registro
      objetoPaciente.id = generarId();
      // Uso el Spread Operator para agregar al arreglo de pacientes un paciente nuevo desde objetoPaciente
      setPacientes([...pacientes, objetoPaciente]);
    }

    //Reiniciar Formulario
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 m-3">
      <h2 className="font-black text-2xl text-center ">
        Seguimiento Pacientos
      </h2>
      <p className="text-lg text-center mt-3 mb-3">
        Añade Pacientes y {""}
        <span className=" font-bold text-indigo-600 ">Administralos</span>
      </p>

      <form
        className=" bg-white rounded-lg shadow-xl py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios" />}
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
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
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
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="fecha"
            className=" block text-gray-700 uppercase font-bold"
          >
            Fecha del Alta
          </label>
          <input
            className="border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
            id="fecha"
            type="date"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="sintomas"
            className=" block text-gray-700 uppercase font-bold"
          >
            Sintomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full mt-2 p-2 rounded-md placeholder-gray-400"
            placeholder="Describe los síntomas"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer"
          value={paciente.id ? "editar paciente" : "agregar pacientes"}
        />
      </form>
    </div>
  );
};

export default Formulario;
