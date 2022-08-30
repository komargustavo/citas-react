const Error = ({mensaje}) => {
  return (
    <div className=" block rounded-xl bg-red-700 uppercase text-white text-center p-3 mb-2">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
