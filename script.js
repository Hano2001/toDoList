document.addEventListener("DOMContentLoaded", function(event) {
    //Variabler vi använder oss av nedan
    let lista2 = document.getElementById("lista2");
    let lista3 = document.getElementById("lista3");
    let nummer = 0;
    let syssla = document.getElementById("syssla");
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
            done_span.addEventListener("click", function() {
                //Kopierar li till Färdigt
                let done1 = this.parentNode;
                let done2 = done1.cloneNode(true);
                lista2.appendChild(done2);
                //Tar bort li från första listan
                this.parentNode.remove();  
                //Skapar lyssnare för permanent borttagning
                let pdelete_span = document.getElementById("del_" +nummer);
                pdelete_span.addEventListener("click", function() {
                    this.parentNode.remove();
                })
            })

            //Skapar en ta bort knapp & lägger till i li
            let delete_button = document.createElement("span");
            delete_button.innerHTML = "Ta bort";
            delete_button.classList.add("delete");
            delete_button.setAttribute("id", "del_" +nummer);
            grej.appendChild(delete_button);
            //Lägger på en lyssnare på ta bort knappen
            let delete_span = document.getElementById("del_" +nummer);
            delete_span.addEventListener("click", function() {
                //Kopierar li till borttagna
                let borttagen1 = this.parentNode;
                let borttagen2 = borttagen1.cloneNode(true);
                lista3.appendChild(borttagen2);
                //Tar bort li från första listan
                this.parentNode.remove();
                //Skapar lyssnare för permanent borttagning
                let pdelete_span2 = document.getElementById("del_" +nummer);
                pdelete_span2.addEventListener("click", function() {
                    this.parentNode.remove();
                })
            })
            //Nollställer textfältet
            syssla.value = "";
        }        
    })
})