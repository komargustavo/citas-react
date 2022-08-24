const Paciente = ()=>{

    return(
        <div className=" shadow-white m-3 bg-white rounded-lg px-5 py-10 ">
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Nombre:{' '}
          <span className=" font-normal normal-case">Hook</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Propietario:{' '}
          <span className=" font-normal normal-case">Gustavo</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          E-Mail:{' '}
          <span className=" font-normal normal-case">email@email.com</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Fecha Alta:{' '}
          <span className=" font-normal normal-case">24/08/2022</span>
        </p>
        <p className="mb-3 font-bold text-gray-700 uppercase">
          Sintomas:{' '}
          <span className=" font-normal normal-case">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad voluptas consectetur molestiae a fugit atque vero, eius in? Saepe officiis inventore deserunt necessitatibus velit distinctio est iure similique delectus odio.</span>
        </p>
      </div>

    )
}

export default Paciente