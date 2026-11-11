import Animal from "./Animal";

export default class Ave extends Animal {
  emitirSom(): string {
    return ` ${this.nome} diz: Piu piu!`;
  }

  constructor(nome: string, idade: number, tutor: string) {
    super(nome, idade, tutor);
  }

  descreverCuidados(): string {
    return ` ${this.nome} (Ave) precisa de gaiola limpa e água fresca.`;
  }
}
