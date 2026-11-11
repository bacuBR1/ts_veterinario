import Ave from "./Ave";
import Cachorro from "./Cachorro";
import Clinica from "./Clinica";
import Consulta from "./Consulta";
import Gato from "./Gato";
import Recepcionista from "./Recepcionista";
import Veterinario from "./Veterinario";

const tutorCarlos = "Carlos Santos";
const rex = new Cachorro("Thor", 4, tutorCarlos);
const mimi = new Gato("Luna", 2, tutorCarlos);
const loro = new Ave("Paco", 5, tutorCarlos);

const draAna = new Veterinario("Ana Paula", "veterinário", 5000);
const joao = new Recepcionista("João Pedro", "recepcionista", 2000);
const clinicaMarta = new Clinica("Clínica Veterinária Dona Marta");

clinicaMarta.adicionarFuncionario(draAna);
clinicaMarta.adicionarFuncionario(joao);
clinicaMarta.cadastrarAnimal(rex);
clinicaMarta.cadastrarAnimal(mimi);
clinicaMarta.cadastrarAnimal(loro);

joao.agendarAtendimento(rex, new Date());
joao.agendarAtendimento(mimi, new Date());

const consulta = new Consulta(rex, draAna, new Date(), "Avaliação anual");
draAna.prescreverTratamento(rex, "Vitamina C por 10 dias");
clinicaMarta.registrarConsulta(consulta);

clinicaMarta.listarAnimaisECuidados();
clinicaMarta.exibirFolhaBonus();

draAna.atualizarSalario(5500);
console.log(` \nNovo salário da Dra. Ana: R$ ${draAna.salario.toFixed(2)}`);
