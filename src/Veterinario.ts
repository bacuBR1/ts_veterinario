import Animal from "./Animal";
import Funcionario from "./Funcionario";

export default class Veterinario extends Funcionario {
  private consultasRealizadas: number = 0;
  private readonly VALOR_BONUS_CONSULTA = 50;

  realizarConsulta(animal: Animal): void {
    this.consultasRealizadas++;
    console.log(
      ` Dr(a). ${this.nome} realizou a consulta ${this.consultasRealizadas} no(a) ${animal.nome}.`
    );
  }

  prescreverTratamento(animal: Animal, tratamento: string): void {
    console.log(` Prescrição para ${animal.nome}: ${tratamento}`);
  }

  calcularBonus(): number {
    return this.consultasRealizadas * this.VALOR_BONUS_CONSULTA;
  }
}
