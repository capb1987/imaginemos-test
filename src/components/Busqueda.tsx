import { Input } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

const Busqueda = () => {
  const [pokemonName, setPokemonName] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPokemonName(e.target.value);
  };

  return (
    <div className="container mx-auto py-4 px-2 flex justify-center">
      <Input
        type="search"
        label="Pokemón"
        size="lg"
        color="default"
        className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full"
        onChange={handleChange}
        defaultValue={pokemonName}
      />
    </div>
  );
};

export default Busqueda;
