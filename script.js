document.addEventListener("DOMContentLoaded", function(event) {
    let btn = document.getElementById("btn");
    let nummer = 0;
    let syssla = document.getElementById("syssla");
    let syssla_nummer = 0;
    document.addEventListener("keypress", function(e) {
        if ((e.key === "Enter") && (syssla.value.trim() != "")) {
            syssla_nummer++;
            
            let grej = document.createElement("li");
            grej.innerHTML = syssla.value;
            
            let lista = document.getElementById("lista");
            lista.appendChild(grej);
            nummer++;
            grej.setAttribute("id", "grej_" + nummer);
            syssla.value = "";

            let delete_button = document.createElement("span");
            delete_button.innerHTML = "Ta bort";
            delete_button.setAttribute("id", syssla_nummer);
            
            grej.appendChild(delete_button);
            let delete_span = document.getElementById(syssla_nummer);
            delete_span.addEventListener("click", function() {
                this.parentNode.remove();
                let bortagen = document.createElement("li");
                bortagen.innerHTML = this.parentNode.innerHTML;
                
            let lista2 = document.getElementById("lista2");
            lista2.appendChild(bortagen);
            bortagen.setAttribute("id", "grej_" + nummer);

        let delete_button = document.createElement("span");
        delete_button.innerHTML = "Ta bort";
        delete_button.setAttribute("id", syssla_nummer);

        /*grej.appendChild(delete_button);
            let delete_span = document.getElementById(syssla_nummer);
            delete_span.addEventListener("click", function() {
                this.parentNode.remove();
                let bortagen = document.createElement("li");
                bortagen.innerHTML = this.parentNode.innerHTML;*/

                
            })
        }
        
        
        /*let lista2 = document.getElementById("lista2");
        lista2.appendChild(bortagen);

        let delete_button = document.createElement("span");
        delete_button.innerHTML = "Ta bort";
        delete_button.setAttribute("id", syssla_nummer);
        
        grej.appendChild(delete_button);
        let delete_span = document.getElementById(syssla_nummer);
        delete_span.addEventListener("click", function() {
            this.parentNode.remove();*/


    })
})