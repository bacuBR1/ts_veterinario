"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(nome, idade, tutor) {
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
}
exports.default = Animal;
