"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = __importDefault(require("./Animal"));
class Ave extends Animal_1.default {
    emitirSom() {
        return ` ${this.nome} diz: Piu piu!`;
    }
    constructor(nome, idade, tutor) {
        super(nome, idade, tutor);
    }
    descreverCuidados() {
        return ` ${this.nome} (Ave) precisa de gaiola limpa e água fresca.`;
    }
}
exports.default = Ave;
