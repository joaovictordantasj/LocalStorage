import BotaoConclui from './concluiTarefa.js';
import BotaoDeleta from './deletaTarefa.js';
 
export const handleNovoItem = (e) => {
  e.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem('Tarefas')) || [];
  const lista = document.querySelector('[data-list]');
  const input = document.querySelector('[data-form-input]');
  const valor = input.value;
  
  const calendario = document.querySelector('[data-form-date]');
  const data = moment(calendario.value);
  const dataFormatada = data.format('DD/MM/YYYY, h:mm a');

  const dados = {
    valor,
    dataFormatada
  }

  const tarefasAtualizadas = [...tarefas, dados];

  const criaTarefa = Tarefa(dados);

  // Salvando dados no Session Storage
  // sessionStorage.setItem('Tarefas', JSON.stringify(dados));

  lista.appendChild(criaTarefa);

  localStorage.setItem('Tarefas', JSON.stringify(tarefasAtualizadas));

  calendario.value = '';
  input.value = '';
}

export const Tarefa = ({ valor, dataFormatada }) => {
    
  const tarefa = document.createElement('li');
  tarefa.classList.add('task');
  const conteudo = `<p class="content">${dataFormatada} * ${valor}</p>`;
  
  tarefa.innerHTML = conteudo;
  
  tarefa.appendChild(BotaoConclui());
  tarefa.appendChild(BotaoDeleta());

  return tarefa;
}