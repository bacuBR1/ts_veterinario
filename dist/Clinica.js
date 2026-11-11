"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clinica {
    constructor(nome) {
        this.funcionarios = [];
        this.animais = [];
        this.consultas = [];
        this.funcionarios = [];
        this.animais = [];
        this.consultas = [];
        this.nome = nome;
    }
    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
    }
    cadastrarAnimal(animal) {
        this.animais.push(animal);
    }
    registrarConsulta(consulta) {
        this.consultas.push(consulta);
    }
    listarAnimaisECuidados() {
        console.log(` \nAnimais cadastrados na ${this.nome}: ${this.animais.length}`);
        this.animais.forEach((animal) => {
            console.log(` ${animal.emitirSom()} | ${animal.descreverCuidados()} | Idade: ${animal.idade} anos | Tutor: ${animal.tutor}`);
        });
    }
    exibirFolhaBonus() {
        console.log(`\n--- Bônus dos Funcionários (${this.nome}) ---`);
        this.funcionarios.forEach((func) => {
            console.log(` ${func.nome} (Mat: ${func.matricula}) - Bônus: R$ ${func.calcularBonus().toFixed(2)}`);
        });
    }
}
exports.default = Clinica;
