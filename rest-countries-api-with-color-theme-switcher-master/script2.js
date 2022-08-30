const dark=document.getElementById("dark");
const title=document.getElementById("title");
const Contenitore=document.getElementById("contenitore");
const paginaAllFlags=document.getElementById("page-all-flags");




/*DARK MODE PER MODALITA' SCURA*/
dark.addEventListener("click",()=>{
    document.body.classList.toggle("scuro");
 })








/*CARICO L'API DAL SITO UFFICIALE*/
const APIDettails="https://restcountries.com/v3.1/all";

function CountryDettagli(){
    fetch(APIDettails)
    .then(Response=>Response.json())
    .then(Data=>{
     
      
        
    })
}

CountryDettagli();