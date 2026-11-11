import Animal from "./Animal";

export default class Gato extends Animal {
  emitirSom(): string {
    return ` ${this.nome} diz: Miau!`;
  }

  constructor(nome: string, idade: number, tutor: string) {
    super(nome, idade, tutor);
  }

  descreverCuidados(): string {
    return ` ${this.nome} (Gato) precisa de arranhador e brincadeiras.`;
  }
}
