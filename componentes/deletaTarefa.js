const deletarTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("Tarefas"));

  tarefasCadastradas.splice(id, 1);
  localStorage.setItem("Tarefas", JSON.stringify(tarefasCadastradas));
  atualiza();
};

const BotaoDeleta = (atualiza, id) => {
  const botaoDeleta = document.createElement("button");

  botaoDeleta.innerText = "deletar";
  botaoDeleta.addEventListener("click", () => deletarTarefa(atualiza, id));

  return botaoDeleta;
};

export default BotaoDeleta;
