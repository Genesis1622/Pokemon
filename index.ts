import { Batalla } from "./batalla";
import { Habilidad } from "./habilidad";
import { Pokemon } from "./pokemon";
import { Tipo } from "./tipo";

const habilidades = new Habilidad("Pistola Agua", 5)
const tipo = new Tipo("Agua", "Planta", 5)
const pokemon = new Pokemon("JONGEN",100, tipo, habilidades)
const batalla = new Batalla(7,2,pokemon)