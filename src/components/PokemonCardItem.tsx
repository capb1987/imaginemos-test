import { capitalizeLetter } from "../utils";

import { Poke } from "./PokemonCard";

import TypePokemon from "../components/TypePokemon";
import { Card, CardBody, Image } from "@nextui-org/react";
const PokemonCardItem = ({
  id,
  name,
  height,
  weight,
  abilities,
  sprites,
  types,
}: Poke) => {
  return (
    <Card key={id} className="py-2 px-2 shadow-md rounded-2xl">
      <CardBody className="overflow-visible p-1 md:p-2">
        <div className="flex flex-col md:flex-row  gap-3 items-center h-full">
          <div className="order-2 md:order1 w-full md:w-1/2">
            <h3 className="text-sm  font-semibold my-2">
              {capitalizeLetter(name)}{" "}
            </h3>
            <ul className="text-xs space-y-1">
              <li>Height: {height}</li>
              <li>Weight: {weight}</li>
              <li>
                Abilites:
                {abilities.map(({ ability }) => ability.name)}
              </li>
            </ul>

            <div className="grid md:grid-cols-2 gap-2 space-y-1 md:space-y-0 my-3">
              {types.map(({ type }) => (
                <TypePokemon key={type.name} type={type} />
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/2">
            <Image
              src={
                sprites?.other["dream_world"]?.front_default ||
                sprites?.other["home"]?.front_default ||
                sprites?.other["official-artwork"]?.front_default ||
                sprites?.front_default
              }
              alt="Imagen pokemon"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default PokemonCardItem;
