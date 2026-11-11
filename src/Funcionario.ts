export default abstract class Funcionario {
  public nome: string;
  public matricula: string;
  private salarioInicial: number;
  private novoSalario: number;

  constructor(nome: string, matricula: string, salarioInicial: number) {
    this.nome = nome;
    this.matricula = matricula;
    this.salarioInicial = salarioInicial;
    this.novoSalario = salarioInicial;
  }

  public get salario(): number {
    return this.novoSalario;
  }

  public atualizarSalario(novoSalario: number): void {
    if (!Number.isFinite(novoSalario) || novoSalario <= 0) {
      throw new Error("Erro: O salário deve ser maior que zero.");
    }
    if (novoSalario < this.salarioInicial) {
      throw new Error("Erro: O novo salário não pode ser menor que o atual.");
    }
    this.salarioInicial = novoSalario;
    this.novoSalario = novoSalario;
  }

  abstract calcularBonus(): number;
}
