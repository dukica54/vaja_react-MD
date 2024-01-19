import {useState} from 'react'
function Nekaj(){

    const [tekst, setTekst]= useState("originalni tekst");
    const  tekst1="nekaj 1"
    const tekst2 = "nekaj 2"
   return(
     <>
         <div id  = 'neke'>Text v Nekaj funkciji</div>
         <p>nekaj nobega v nekaj</p>
         <button onClick={(e)=>{setTekst(!tekst)}}>klikni me</button>
         <span>{tekst? tekst1: tekst2}</span>
     </>
 
   );
 }
 export default Nekaj;