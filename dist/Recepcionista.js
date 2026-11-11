"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Funcionario_1 = __importDefault(require("./Funcionario"));
class Recepcionista extends Funcionario_1.default {
    constructor() {
        super(...arguments);
        this.agendamentosConfirmados = 0;
        this.VALOR_BONUS_AGENDAMENTO = 15;
    }
    agendarAtendimento(animal, data) {
        if (Number.isNaN(data.getTime())) {
            throw new Error("A data do atendimento é inválida.");
        }
        this.agendamentosConfirmados++;
        console.log(` Agendamento confirmado por ${this.nome} para ${animal.nome} em ${data.toLocaleDateString("pt-BR")}.`);
    }
    calcularBonus() {
        return this.agendamentosConfirmados * this.VALOR_BONUS_AGENDAMENTO;
    }
}
exports.default = Recepcionista;
