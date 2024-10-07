const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('Keypress', function(e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaImput() {
  imputTarefas.value = '';
  imputTarefas.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const constBotaoApagar = document.craateElement('button');
  botaoApagar.innerText = 'apagar'
  li.appendChild(botaoApagar);
}

function criaTarefa(textoImput) {
  const li = criaLi();
  li.innerText = textoImput;
  tarefas.appendChild(li);
  limpaImput();
  criaBotaoApagar(li);
  salvarTarefa();
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {
  const el = e.target;

  if (el.classList.contains('apagar')) {
    el.parentElement.remove();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
    console.log(listaDeTarefas);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.satItem('tarefas', tarefasJSON);
}
