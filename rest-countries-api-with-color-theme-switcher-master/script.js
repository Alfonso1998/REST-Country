const dark=document.getElementById("dark");
const title=document.getElementById("title");
const input=document.getElementById("search");
const Contenitore=document.getElementById("contenitore");
const divCountry=document.getElementById("gridCountry");
const nomePaese=document.getElementsByClassName("nomeCountry");
const Continente=document.getElementsByClassName("continente");
const paginaAllFlags=document.getElementById("page-all-flags");
const back=document.getElementById("back");
const paginaDettailsFlag=document.getElementById("page-dettagli");




 
 function showFlags(dati){
  const country=document.createElement("div");
  country.classList.add("country");
    country.innerHTML=
    `
    <img class="image" src=${dati.flags.png} alt="img-not-found">
    <div class="description">
        <h4 class="nomeCountry">${dati.name.common}</h4>
        <p id="population">popolazione:  ${dati.population}</p>
        <p class="continente" id="Continente">Continente:  ${dati.region}</p>
        <p id="capital">capitale: ${dati.capital}</p>
    </div>
        </div>`
        divCountry.appendChild(country);
        country.addEventListener("click",()=>{
            showDettails(dati);
        })

       
}


/*FILTRO PER IL CONTINENTE*/
function getOption(){
   let select=document.getElementById("select").value;
   console.log(select);
}

select.addEventListener("change",()=>{
    getOption();
    Array.from(Continente).forEach(element=>{
        if(element.innerHTML.toLowerCase().includes(select.value.toLowerCase()) || select.value=="All"){
            element.parentElement.parentElement.style.display="grid";
        }else{
            element.parentElement.parentElement.style.display="none";
        }
       })
            
        })



/*DARK MODE PER MODALITA' SCURA*/
dark.addEventListener("click",()=>{
   document.body.classList.toggle("scuro");
})


/**/
function Evento(){
    window.addEventListener("DOMContentLoaded",()=>{
        LoadJson();
    })
}


Evento();

/*CARICO L'API DAL SITO UFFICIALE*/
const APICountry="https://restcountries.com/v3.1/all";
  function LoadJson(){
  fetch(APICountry)
    .then( Response=> Response.json())
    .then( Data =>{
        console.log(Data);
        Data.forEach(element => {
            showFlags(element);
       
         });
                           

                        
                       

                             /*FILTRA SCRIVENDO IL NOME DELLA NAZIONE*/
                        input.addEventListener("keyup",()=>{
                        console.log(input.value.toLowerCase());
                       Array.from(nomePaese).forEach(element=>{
                        if(element.innerHTML.toLowerCase().includes(input.value.toLowerCase())){
                            element.parentElement.parentElement.style.display="grid";
                        }else{
                            element.parentElement.parentElement.style.display="none";
                        }
                       })
                            
                        })
                       
                       
                   
    })
    

}



back.addEventListener("click",()=>{
    paginaDettailsFlag.style.display="none";
    paginaAllFlags.style.display="block";
       

});


function showDettails(dati){
    paginaAllFlags.style.display="none";
    paginaDettailsFlag.style.display="block";

    


   
   
    let Dettagli="";
    Dettagli+=`
 <div class="contenitore-dettagli" id="contenitore">
    <img src="${dati.flags.png}" alt="image-not-found">
    <div class="dettagli">
            <h1>${dati.name.common}</h1>
            <div class="griglia-dettagli">
                <p class="Name"><strong>Native Name:</strong>${Object.values(dati.name)[1]}</p>
                <p class="Domain"><strong>Top Level Domain:</strong>${dati.tld}</p>
                <p class="Popolazione"><strong>Population:</strong>${dati.population}</p>
                <p class="Moneta"><strong>Currencies:</strong>${Object.keys(dati.currencies)[0]}</p>
                <p class="Regione"><strong>Region:</strong>${dati.region}</p>
                <p class="Language"><strong>Language:</strong>${Object.values(dati.languages)[0]}</p>
                <p class="Sub"><strong>Sub Region:</strong>${dati.subregion}</p>
                <p class="Capitale"><strong>Capitol:</strong>${dati.capital}</p>
            </div> 
     </div>
 </div> `


 Contenitore.innerHTML=Dettagli; 



 }



