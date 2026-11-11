import Animal from "./Animal";
import Consulta from "./Consulta";
import Funcionario from "./Funcionario";

export default class Clinica {
  private funcionarios: Funcionario[] = [];
  private animais: Animal[] = [];
  private consultas: Consulta[] = [];
  public nome: string;

  constructor(nome: string) {
    this.funcionarios = [];
    this.animais = [];
    this.consultas = [];
    this.nome = nome;
  }

  adicionarFuncionario(funcionario: Funcionario): void {
    this.funcionarios.push(funcionario);
  }

  cadastrarAnimal(animal: Animal): void {
    this.animais.push(animal);
  }

  registrarConsulta(consulta: Consulta): void {
    this.consultas.push(consulta);
  }

  listarAnimaisECuidados(): void {
    console.log(` \nAnimais cadastrados na ${this.nome}: ${this.animais.length}`);
    this.animais.forEach((animal) => {
      console.log(
        ` ${animal.emitirSom()} | ${animal.descreverCuidados()} | Idade: ${animal.idade} anos | Tutor: ${animal.tutor}`
      );
    });
  }

  exibirFolhaBonus(): void {
    console.log(`\n--- Bônus dos Funcionários (${this.nome}) ---`);
    this.funcionarios.forEach((func) => {
      console.log(
        ` ${func.nome} (Mat: ${func.matricula}) - Bônus: R$ ${func.calcularBonus().toFixed(2)}`
      );
    });
  }
}
