import { Type } from "../components/PokemonCard";

const TypePokemon = ({ type }: Type) => {
  const { name } = type;

  return (
    <div className="text-sm md:text-xs bg-black rounded-md text-white p-2 text-center">
      {name}
    </div>
  );
};

export default TypePokemon;
