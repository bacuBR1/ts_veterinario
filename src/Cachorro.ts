import Animal from "./Animal";

export default class Cachorro extends Animal {
  emitirSom(): string {
    return ` ${this.nome} diz: Au au!`;
  }

  constructor(nome: string, idade: number, tutor: string) {
    super(nome, idade, tutor);
  }

  descreverCuidados(): string {
    return ` ${this.nome} (Cachorro) precisa de passeio e brincadeiras diárias.`;
  }
}
