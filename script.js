let tarefas = [];

function adicionarTarefa() {
  let mensagemSucesso = "Tarefa adicionada com sucesso!";

  let inputTarefa = document.getElementById("inputTarefa");
  let tarefa = inputTarefa.value;
  console.log(tarefa);

  const mensagem = document.getElementById("mensagem");

  if (tarefa == "") {
    let mensagemErro = "Tarefa vazia, não pode ser adicionada";
    mensagem.textContent = mensagemErro;
  } else {
    mensagem.textContent = mensagemSucesso;

    tarefas.push(tarefa);
    renderizarTarefas();

    inputTarefa.value = "";
  }
}

function renderizarTarefas() {
  let listaTarefas = document.getElementById("listaTarefas");
  listaTarefas.innerHTML = "";

  for (let i = 0; i < tarefas.length; i++) {
    let novaTarefa = document.createElement("li");
    novaTarefa.textContent = tarefas[i];

    let botaoRemover = document.createElement("button");
    botaoRemover.className = "remover";
    botaoRemover.textContent = "Remover";
    botaoRemover.onclick = () => removerTarefa(i);

    let botaoEditar = document.createElement("button");
    botaoEditar.className = "editar";
    botaoEditar.textContent = "Editar";
    botaoEditar.onclick = () => editarTarefa(i);

    novaTarefa.append(botaoRemover);
    novaTarefa.append(botaoEditar);
    listaTarefas.appendChild(novaTarefa);
  }
}

function removerTarefa(i) {
  tarefas.splice(i, 1);
  renderizarTarefas();
}

function editarTarefa(i) {
  let tarefaEditada = prompt("Edite a tarefa:");
  if (tarefaEditada != "") {
    tarefas[i] = tarefaEditada;
    renderizarTarefas();
  }
}

function limparLista() {
  if (tarefas != "") {
    tarefas.length = 0;
    renderizarTarefas();

    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Lista de tarefas limpa com sucesso";
  } else {
    const mensagem2 = document.getElementById("mensagem");
    mensagem2.textContent = "Lista de tarefas não há tarefas";
    renderizarTarefas();
  }
}
