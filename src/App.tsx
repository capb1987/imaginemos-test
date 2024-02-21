import "./App.css";
import Busqueda from "./components/Busqueda";
import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <main>
      <div className="py-5">
        <h1 className="text-2xl md:text-4xl text-center m-0 font-extrabold">
          Prueba Técnica <span className="text-yellow-500 ">PokeAPI</span>
        </h1>
        <p className="my-4 font-semibold text-yellow-500 text-xs md:text-base text-center">
          Muestra los diferentes pokemones que se buscarán y sus estadisticas
        </p>
      </div>

      {/* Barra de Busqueda y Grafica  */}
      <section className="bg-blue-300 h-36">
        <Busqueda />
      </section>

      {/* Grilla de Pokemons */}

      <section className="my-3 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-2 md:gap-3 container mx-auto w-5/6">
        <h3 className="col-span-1 md:col-span-2 lg:col-span-3  my-4 text-center text-base sm:text-xl md:text-2xl lg:text-3xl uppercase font-bold">
          Grilla de Pokemones
        </h3>

        <PokemonCard />
      </section>
    </main>
  );
}

export default App;
