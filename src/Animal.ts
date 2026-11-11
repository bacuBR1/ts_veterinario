export default abstract class Animal {
  public nome: string;
  public idade: number;
  public tutor: string;

  constructor(nome: string, idade: number, tutor: string) {
    if (!nome.trim() || !tutor.trim()) {
      throw new Error("O nome do animal e do tutor são obrigatórios.");
    }
    if (!Number.isInteger(idade) || idade < 0) {
      throw new Error("A idade deve ser um número inteiro igual ou maior que zero.");
    }
    this.nome = nome;
    this.idade = idade;
    this.tutor = tutor;
  }

  abstract emitirSom(): string;

  abstract descreverCuidados(): string;
}
