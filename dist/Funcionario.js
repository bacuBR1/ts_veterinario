"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Funcionario {
    constructor(nome, matricula, salarioInicial) {
        this.nome = nome;
        this.matricula = matricula;
        this.salarioInicial = salarioInicial;
        this.novoSalario = salarioInicial;
    }
    get salario() {
        return this.novoSalario;
    }
    atualizarSalario(novoSalario) {
        if (!Number.isFinite(novoSalario) || novoSalario <= 0) {
            throw new Error("Erro: O salário deve ser maior que zero.");
        }
        if (novoSalario < this.salarioInicial) {
            throw new Error("Erro: O novo salário não pode ser menor que o atual.");
        }
        this.salarioInicial = novoSalario;
        this.novoSalario = novoSalario;
    }
}
exports.default = Funcionario;
