const Country = ({ country }) => {
  // console.log(country);
  const { name, flags, capital, population, area } = country;
  return (
    <article>
      <div className=" bg-slate-500 text-white shadow-xl">
        <img src={flags.png} alt={name.common} className=" w-52 h-52 m-auto" />
        <h3 className="">Name: {name.common}</h3>
        <h3>Population: {population}</h3>
        <h3>Capital: {capital}</h3>
        <h3>Area: {area}</h3>
        <button
          className=" bg-red-600 p-2 rounded-lg"
          onClick={() => {
            handleRemoveCountry(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
