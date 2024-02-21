##Prueba Téccnica PokeAPI

-Se instaló vite con npm create vite@latest y con typescript

-Luego se agrego npm i para agregar node_modules

-Se agregó un paquete llamado million js que permite llevar mucho mas rapido la ejecución

-se agrego tailwind npm install -D tailwindcss postcss autoprefixer y npx tailwindcss init -p para iniciarlo y despues se configura: https://tailwindcss.com/docs/guides/vite.

-Se agregó nextUI para hacer mucho mejor vistoso los componentes en link puede ver la instalación:https://nextui.org/docs/guide/installation

-se agrega zustand como manejador de estados lo cual permite manejarlo mucho mas sencilla. https://docs.pmnd.rs/zustand/getting-started/introduction

- se agrego una variable de entorno que permitió llevar la API mucho mejor. (.env)

-Las Librerias que fueron Utilizadas son del package.json:

"dependencies": {
"@nextui-org/react": "^2.2.9",
"framer-motion": "^11.0.5",
"million": "^3.0.3",
"normalize.css": "^8.0.1",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"zustand": "^4.5.1"
},
"devDependencies": {
"@types/react": "^18.2.55",
"@types/react-dom": "^18.2.19",
"@typescript-eslint/eslint-plugin": "^6.21.0",
"@typescript-eslint/parser": "^6.21.0",
"@vitejs/plugin-react": "^4.2.1",
"autoprefixer": "^10.4.17",
"eslint": "^8.56.0",
"eslint-plugin-react-hooks": "^4.6.0",
"eslint-plugin-react-refresh": "^0.4.5",
"postcss": "^8.4.35",
"tailwindcss": "^3.4.1",
"typescript": "^5.2.2",
"vite": "^5.1.0"
}

#Componentes Usados

-App.tsx (Principal)
-Busqueda.tsx
-PokemonCard.tsx
-PokemonCardItem.tsx
-SpinnerCardPokemon.tsx
