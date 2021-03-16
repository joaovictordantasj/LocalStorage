import { carregaTarefa } from "./carregaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import BotaoDeleta from "./deletaTarefa.js";

export const handleNovoItem = (e) => {
  e.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("Tarefas")) || [];
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const dataFormatada = data.format("DD/MM/YYYY, h:mm a");
  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    concluida,
  };

  const tarefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("Tarefas", JSON.stringify(tarefasAtualizadas));

  calendario.value = "";
  input.value = "";

  carregaTarefa();
};

export const Tarefa = ({ valor, dataFormatada, concluida }, id) => {
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;

  if (concluida) {
    tarefa.classList.add("done");
  }

  tarefa.classList.add("task");

  tarefa.innerHTML = conteudo;

  tarefa.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
};
