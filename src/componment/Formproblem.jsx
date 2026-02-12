import { useEffect, useState } from "react";

export default function Formproblem({form , onverified }){
    
    const [formproblem , setformproblem] = useState({});
    useEffect(()=>{
        if(Object.keys(form).length === 0) return;
        const errors = {} ;
        if( form.name.trim() === ""){
            errors.name = "Name is required"
            
        }
        if(form.email.trim() === ""){
            errors.email = "Email is required"
            
        }else{
            if(!form.email.includes('@')){
                errors.email = "Email Invalid"
                
            }
        }
        if(form.message.length < 100){
            errors.message = `Message should be greater than 100 (${form.message.length}/100)`
            
        }
        if(form.accept === false){
            errors.accept = "should be accept our rules"
            
        }
        setformproblem(errors);
        onverified(errors) ;
        
        
    } , [form])
    
    
    const displayproblems = ()=>{
        
        return Object.entries(formproblem).map(([key, value]) => {
            return (
                <li key={key}>
                    <strong>{key}:</strong> {value}
                </li>
            )
        })
    }
    return Object.keys(formproblem).length !==0 ? (
        <>
            <div
                className="alert alert-danger"
                role="alert"
            >
                <ul>
                    {displayproblems()}
                </ul>
            </div>
            
        </>
    ) : null
}