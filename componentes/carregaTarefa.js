import { Tarefa } from './criaTarefa.js';
 
export const carregaTarefa = () => {
  const lista = document.querySelector ('[data-list]');
  
  const tarefasCadastradas = JSON.parse(localStorage.getItem('Tarefas')) || [];

  lista.innerHTML = '';
  tarefasCadastradas.forEach ((tarefa) => {
    lista.appendChild(Tarefa(tarefa))
  });
}