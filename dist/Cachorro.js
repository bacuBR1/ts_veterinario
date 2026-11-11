"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Cachorro extends Animal_1.default {
    emitirSom() {
        return ` ${this.nome} diz: Au au!`;
    }
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    descreverCuidados() {
        return ` ${this.nome} (Cachorro) precisa de passeio e brincadeiras diárias.`;
    }
}
exports.default = Cachorro;
