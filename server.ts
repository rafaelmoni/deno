//Deno.serve(() => new Response("Hello!"));

/*
const run = (greetings: string) => {
  console.log(greetings);
};

run("Olár! :D");
*/

import {
  prettier,
  prettierPlugins,
} from "https://denolib.com/denolib/prettier/prettier.ts";

const config = JSON.stringify(
  {
    ar: "123",
    "ar.sit": "456",
    br: 789,
  },
  null,
  2
);

const file = prettier.format(`export default ${config};`, {
  parser: "babel",
  plugins: prettierPlugins,
  trailingComma: "es5",
});

Deno.writeTextFile("config.ts", file);
