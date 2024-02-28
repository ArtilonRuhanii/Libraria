document.addEventListener("DOMContentLoaded", function(){
    let librat = [
        {id:1 , emri:"Meshari" , autori:"Gjon Buzuku" , category:"Shqip" , image:"./img/photo1.jpg"},
        {id:2 , emri:"Shqipëria" , autori:"Naim Frashëri" , category:"Shqip" , image:"./img/photo2.jpg"},
        {id:3 , emri:"Qerbelaja" , autori:"Naim Frashëri" , category:"Shqip" , image:""},
        {id:4 , emri:"Bagëti e bujqësi" , autori:"Naim Frashëri" , category:"Shqip" , image:""},
        {id:5 , emri:"Shqipëria ç'ka qenë, ç'është e ç'do të bëhet" , autori:"Sami Frashëri" , category:"Kombëtar" , image:""},
        {id:6 , emri:"Shkronjtore e gjuhës shqipe" , autori:"Sami Frashëri" , category:"Anlgisht" , image:""},
    ]
    shfatLibrat(librat);
    var dropbtn = document.getElementById("dropbtn");
    
    let kategoria = [];
    librat.forEach(libri => {
        let i = 0;
        if(kategoria[i] !== libri.category){
            i++;
            kategoria.push(libri.category)
        }
    });
    
    dropbtn.addEventListener('click', function(){
        libratCat.style.display = 'flex';
        fshehLibrin(librat);
    })
    
    function shfaqKategorite(){
    
        kategoria.forEach(categorie => {
    
            const divi = document.createElement('div');
            pTitulli = document.createElement("p");
            checkbox = document.createElement("input")
            checkbox.type = 'checkbox';
            checkbox.value = categorie;
            
            const label = document.createElement('label');
            label.htmlFor = categorie;
            label.appendChild(document.createTextNode(categorie));
            
            // Add event listener to checkbox
            checkbox.addEventListener('change', function() {
                if (this.checked) {
                    shfaqLibrin(categorie);
                    uncheckOtherCheckboxes(this);
                } else {
                    fshehLibrin(categorie);
                    // Handle when checkbox is unchecked
                }
            });
            
            // Append the checkbox and label to the div
            divi.appendChild(checkbox);
            divi.appendChild(label);
            
            // Append the div to the container
            document.getElementById("libratCat").appendChild(divi);
            })
    
    }
    
    shfaqKategorite();
    
    function uncheckOtherCheckboxes(currentCheckbox) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox !== currentCheckbox) {
                checkbox.checked = false;
            }
        });
    }
    
    
    function shfaqLibrin(categorie){
        const Titujt = document.getElementById("Titujt");
            Titujt.innerHTML = "";
    
        librat.forEach(libri => {
            if(categorie === libri.category){
                const div = document.createElement('div');
                    let pTitullia = document.createElement("p");      
                    let pTitulliFoto = document.createElement("img");
                        
                    pTitullia.innerHTML = libri.emri;
                    pTitulliFoto.src = libri.image;
                    
                    div.appendChild(pTitulliFoto);
                    div.appendChild(pTitullia);
    
                    document.getElementById("Titujt").appendChild(div);
                
            }
        });
    }
    
    function fshehLibrin(categorie) {
        const Titujt = document.getElementById("Titujt");
        const libratDiv = Titujt.querySelectorAll("p, img");
    
        libratDiv.forEach(element => {
            const libri = librat.find(libri => libri.emri === element.innerHTML);
            if (libri && libri.category === categorie) {
                element.remove();
            }
        });
    }
    
        function shfatLibrat(librat){
            
            librat.forEach(libri => {
                const div = document.createElement('div');
                    let pTitullia = document.createElement("p");      
                    let pTitulliFoto = document.createElement("img");
                        
                    pTitullia.innerHTML = libri.emri;
                    pTitulliFoto.src = libri.image;
    
                    div.appendChild(pTitulliFoto);
                    div.appendChild(pTitullia);
                    
    
                    document.getElementById("Titujt").appendChild(div);
                        
                    
                
            });
            
            
            
        }
    })
    