var itemLista = document.getElementById("ul");
function addTarefa() {
    if (document.getElementById("itemLista").value !== "") {
        var tarefa = document.createElement("li");
        tarefa.innerHTML = document.getElementById("itemLista").value;
        
        var remover = document.createElement("a");
        remover.innerHTML = "Remover";
        remover.setAttribute("href", "javascript:;"); // apenas para parecer um link
        remover.onclick = function() {
            // remove apenas "tarefa", que é o li
            itemLista.removeChild(tarefa);
        }

        // adiciona o link de remover ao li
        tarefa.appendChild(remover);
        // adiciona o li ao ul
        itemLista.appendChild(tarefa);
        document.getElementById("itemLista").value = "";
    }
}