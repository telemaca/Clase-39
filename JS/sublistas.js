let mensaje = "";
let tasksAdded = "";
let keepGoingCategory = true;
let keepGoingTask = true;
let addCategories = true;
let addTask = true;
let newList = [];
let category = "";

while (keepGoingCategory) {
    
    let taskList = []
    category = prompt(`Ingrese el nombre de la categoría:`)
    taskList.push(category)
    
    while (keepGoingTask) {
        task = prompt(`Ingrese una tarea para agregar a "${category}":`)
        taskList.push(task)
        addTask = confirm(`¿Quiere agregar más tareas?`)
        
        if (addTask === false) {
            keepGoingTask = false;
        }
    }
    newList.push(taskList)
    
    //TRATÉ DE HACER QUE EL MENSAJE APARECIERA EN CADA POP-UP, PERO NO LO LOGRÉ. BASTANTE ME COSTÓ HACER ESTO.
    mensaje = "";
    for(let i = 0; i<newList.length; i++){
        mensaje += '✅' + newList[i][0] + '\n' +'------------' + '\n' 
        for(let j = 1; j<newList[i].length; j++){
            mensaje += '👉' + newList[i][j] + '\n'
        }
        mensaje += '- - - - - - -' + '\n'
    }

    addCategories = confirm(mensaje + `¿Quiere agregar más categorías?`)
        if (addCategories) {
            keepGoingTask = true;
        } else {
            alert(`Tareas ingresadas:\n` + mensaje)
            keepGoingCategory = false;
        }
}