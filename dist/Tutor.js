"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tutor {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
        if (!nome.trim()) {
            throw new Error("O nome do tutor é obrigatório.");
        }
    }
}
exports.default = Tutor;
