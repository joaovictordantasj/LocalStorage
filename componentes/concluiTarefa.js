const concluirTarefa = (atualiza, id) => {
  const tarefasCadastradas = JSON.parse(localStorage.getItem("Tarefas"));
  tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida;
  localStorage.setItem("Tarefas", JSON.stringify(tarefasCadastradas));

  atualiza();
};

const BotaoConclui = (atualiza, id) => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";

  botaoConclui.addEventListener("click", () => concluirTarefa(atualiza, id));

  return botaoConclui;
};

export default BotaoConclui;
