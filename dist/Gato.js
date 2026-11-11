"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Gato extends Animal_1.default {
    emitirSom() {
        return ` ${this.nome} diz: Miau!`;
    }
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    descreverCuidados() {
        return ` ${this.nome} (Gato) precisa de arranhador e brincadeiras.`;
    }
}
exports.default = Gato;
