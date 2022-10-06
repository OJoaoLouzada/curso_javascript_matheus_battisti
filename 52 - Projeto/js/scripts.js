// Função que adiciona tarefa
function addTask(){
    // Título da tarefa
    const taskTitle = document.querySelector('#task-title').value;
    if(taskTitle){
        // Clonar o template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true);
        // Adicionar título
        newTask.querySelector('.task-title').textContent = taskTitle;
        // Remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');
        // Adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);
        // Adicionar evento de remover tarefa
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        });
        // Adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            doneTask(this);
        });
        // Limpar texto
        document.querySelector('#task-title').value = '';
    }
}

// Função de remover tarefa
function removeTask(task){
    task.parentNode.remove(true);
}

// Função de completar tarefa
function doneTask(task){
    const doneTask = task.parentNode;
    doneTask.classList.toggle('done');

}

// Evento de adicionar tarefa
const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', function(e){
    e.preventDefault();
    addTask();
});