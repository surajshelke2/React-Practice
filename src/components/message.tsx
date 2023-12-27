import { useState } from "react";


interface Props {

    paragraph : string;
    maxlength:number;

}

const message = ({paragraph,maxlength=100}:Props) => {
    const [expanded , isExpanded] = useState(false);
   
     if (paragraph.length <= maxlength) return <p>{paragraph}</p>

     const text = expanded ? paragraph: paragraph.substring(0,maxlength)
       
     return <p>
      {text}...
      <button onClick={()=>isExpanded(!expanded)}>{expanded?'Less':'More'}</button></p>
   
  
}

export default message