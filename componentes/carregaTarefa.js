import { removeDatasRepetidas } from '../service/data.js';
import { criaData } from './criaData.js';
import { Tarefa } from './criaTarefa.js';
 
export const carregaTarefa = () => {
  const lista = document.querySelector ('[data-list]');
  
  const tarefasCadastradas = JSON.parse(localStorage.getItem('Tarefas')) || [];

  lista.innerHTML = '';
  const datasUnicas = removeDatasRepetidas(tarefasCadastradas);

  datasUnicas.forEach ((dia) => {
    lista.appendChild(criaData(dia));
  });
}