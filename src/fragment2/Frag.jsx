import { useEffect, useRef,useState } from "react";

function Frag(){
    const [tekst, setTekst]= useState(false);
    const  reference =useRef(0);
    useEffect((e)=>{
        reference.current++;
    })

   return(
     <>
        <div>
            <input type = {"text"} ref ={reference} value= {reference.current.value}/>
            <button onClick={(e)=>{console.log(reference.current.value)}}>klikni me</button>



        </div>

        
         <div id  = 'neke'>Text v Nekaj funkciji</div>
         <p>nekaj nobega v nekaj</p>
         <button onClick={(e)=>{setTekst(!tekst)}}>klikni me</button>
         <span>{tekst? "prvi tekst": "drugi tekst"}</span>
         <div>{reference.current}</div>
     </>
 
   );
 }

 export default Frag;