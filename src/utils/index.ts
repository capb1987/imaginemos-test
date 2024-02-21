export const urlPoke = `${import.meta.env.VITE_API_URL}`;

export function capitalizeLetter(pokemonTitle: string): string {
  if (pokemonTitle && pokemonTitle.length > 0) {
    return pokemonTitle.charAt(0).toUpperCase() + pokemonTitle.slice(1);
  } else {
    return pokemonTitle;
  }
}
