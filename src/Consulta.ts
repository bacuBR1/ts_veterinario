import Animal from "./Animal";
import Veterinario from "./Veterinario";

export default class Consulta {
  constructor(
    public readonly animal: Animal,
    public readonly veterinario: Veterinario,
    public readonly data: Date,
    public observacoes = ""
  ) {
    if (!animal || !veterinario) {
      throw new Error("Uma consulta não pode existir sem um animal e um veterinário.");
    }
    if (Number.isNaN(data.getTime())) {
      throw new Error("A data da consulta é inválida.");
    }
    this.veterinario.realizarConsulta(this.animal);
  }
}
