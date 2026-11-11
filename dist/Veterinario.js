"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Veterinario extends Funcionario_1.default {
    constructor() {
        super(...arguments);
        this.consultasRealizadas = 0;
        this.VALOR_BONUS_CONSULTA = 50;
    }
    realizarConsulta(animal) {
        this.consultasRealizadas++;
        console.log(` Dr(a). ${this.nome} realizou a consulta ${this.consultasRealizadas} no(a) ${animal.nome}.`);
    }
    prescreverTratamento(animal, tratamento) {
        console.log(` Prescrição para ${animal.nome}: ${tratamento}`);
    }
    calcularBonus() {
        return this.consultasRealizadas * this.VALOR_BONUS_CONSULTA;
    }
}
exports.default = Veterinario;
