document.addEventListener("DOMContentLoaded", function(event) {
    //Variabler vi använder oss av nedan
    let lista2 = document.getElementById("lista2");
    let lista3 = document.getElementById("lista3");
    let nummer = 0;
    let syssla = document.getElementById("syssla");    
    //Funktion för att lägga till permanent borttagning
    function removeButtons(target) {
        let a = target.parentNode;
        a.removeChild(a.lastChild);
        a.removeChild(a.lastChild);        
        return a;
    }
    //Funktion för att flytta till annan lista
    function moveTo(parentNode, destination) {
        let a = parentNode;
        let b = a.cloneNode(true);
        destination.appendChild(b);
        parentNode.remove();
        let c = b;
        return c;
    }
    //Skapar permanent ta bort knapp
    function addPermDelete(target) {
        let pdel_button = document.createElement("span");
        pdel_button.innerHTML = "Ta bort helt";
        pdel_button.classList.add("pdelete");
        pdel_button.setAttribute("id", "pdel_" +nummer);
        target.appendChild(pdel_button);
        let deletes = document.querySelectorAll(".pdelete")
        deletes.forEach(btn => {
            btn.addEventListener("click", function() {
                let li = this.parentNode;
                li.remove();
            })
        })
    }    
    //Koden nedan triggas när man trycker Enter när något
    //tecken finns i textrutan.
    document.addEventListener("keypress", function(e) {
        if ((e.key === "Enter") && (syssla.value.trim() != "")) {
            //Skapar nya nummer för att ha unika id
            //till våra list items.
            nummer++;
            //Skapar list item.
            let grej = document.createElement("li");
            grej.innerHTML = syssla.value;
            //Lägger till vårt nya li till listan m. unikt id
            let lista = document.getElementById("lista");
            lista.appendChild(grej);
            grej.setAttribute("id", "grej_" + nummer);
                   
            //Skapar en klart knapp & lägger till i li
            let done_button = document.createElement("span");
            done_button.innerHTML = "Klart";
            done_button.classList.add("done");
            done_button.setAttribute("id", "done_" +nummer);
            grej.appendChild(done_button);
            //Lägger på en lyssnare på klart knappen
            let done_span = document.getElementById("done_" +nummer);
            done_span.addEventListener("click", function(event){
                a = removeButtons(event.target);
                b = moveTo(a, lista2);
                addPermDelete(b);                
            })

            //Skapar en ta bort knapp & lägger till i li
            let delete_button = document.createElement("span");
            delete_button.innerHTML = "Ta bort";
            delete_button.classList.add("delete");
            delete_button.setAttribute("id", "del_" +nummer);
            grej.appendChild(delete_button);
            //Lägger på en lyssnare på ta bort knappen
            let delete_span = document.getElementById("del_" +nummer);
            delete_span.addEventListener("click", function(event) {
                a = removeButtons(event.target);
                b = moveTo(a, lista3);
                addPermDelete(b);
            })
            //Nollställer textfältet
            syssla.value = "";
        }        
    })
})