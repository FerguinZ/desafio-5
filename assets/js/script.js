const btn = document.querySelector('#agregar');
const arregloTareas = [];
let = ultimoId = 1;

const eliminarTarea = function(idtarea) {
    const posicion = arregloTareas.findIndex((e) => e.id == idtarea);

    if (posicion <= 0){
    arregloTareas.splice(posicion,1);
    dibujaLista ();
    }
    
}

const marcarTareaRealizada = function(idtarea){
    const posicion = arregloTareas.findIndex((e) => e.id == idtarea);


    if (arregloTareas[posicion].realizada == true)
    arregloTareas[posicion].realizada = false;
    else if (  arregloTareas[posicion].realizada = true
    ); 
    dibujaLista();
    }

const dibujaLista = function(){
    const   listaTareas = document.querySelector('#listaTareas')
    

    let htmlElementosLista = '<thead><th>ID</th><th>Tarea</th><th></th><thead><tbody>';
    for (const tarea of arregloTareas) {
        if (tarea.realizada){
            statusCheck = 'checked';
        }
        else{
            statusCheck = '';
        }
        htmlElementosLista += `
        <tr>
         <th>${tarea.id}</th>
         <th> ${tarea.nombre}</th>
         <th><input type="checkbox" ${statusCheck} onclick="marcarTareaRealizada(${tarea.id})">
          <button class="btn btn-danger" onclick="eliminarTarea(${tarea.id})">eliminar<th>
          </tr>
        <tbody>`;
    }
    htmlElementosLista += '</tbody>';
    
    listaTareas.innerHTML = htmlElementosLista;
    document.querySelector('#totalTareas').innerHTML = arregloTareas.length;

    const arregloTareasRealizadas = arregloTareas.filter((e) => e.realizada == true);

    document.querySelector('#tareasRealizadas').innerHTML = arregloTareasRealizadas.length;        
}


btn.addEventListener('click',function(){
    const nombreTarea = document.querySelector('#nombreTarea').value;
    const id = ultimoId;
    const realizada = false;

    const tarea = {
        id: id,
        nombre: nombreTarea,
        realizada: realizada
    }
    
    
    arregloTareas.push(tarea);
    
    dibujaLista();

    ultimoId++;
});