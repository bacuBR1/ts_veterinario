"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Consulta {
    constructor(animal, veterinario, data, observacoes = "") {
        this.animal = animal;
        this.veterinario = veterinario;
        this.data = data;
        this.observacoes = observacoes;
        if (!animal || !veterinario) {
            throw new Error("Uma consulta não pode existir sem um animal e um veterinário.");
        }
        if (Number.isNaN(data.getTime())) {
            throw new Error("A data da consulta é inválida.");
        }
        this.veterinario.realizarConsulta(this.animal);
    }
}
exports.default = Consulta;
