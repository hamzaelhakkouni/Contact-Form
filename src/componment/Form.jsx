import { useEffect, useRef, useState } from "react"
import Formproblem from "./Formproblem";

export default function Form(){
    const inputname = useRef();
    const inputemail = useRef();
    const inputmessage = useRef();
    const inputaccept = useRef();
    const [form , setForm] = useState({});
    const [formproblems , setformproblems] = useState({});
    
    const SubmittedForm = (e)=>{
        e.preventDefault();
        const newForm = {
            name : inputname.current.value ,
            email : inputemail.current.value ,
            message : inputmessage.current.value ,
            accept : inputaccept.current.checked 
        }
        
        setForm(newForm);
        
    }
    
    return(
        <>
            <h1 className="text-center mt-3 fw-bolder ">Contact Form</h1> <hr />
            <Formproblem form={form} onverified={(value)=>{setformproblems(value)}} />
            <form className="m-5 mt-0" onSubmit={SubmittedForm}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name=""
                        id=""
                        aria-describedby="helpId"
                        placeholder=""
                        ref={inputname}
                    />
                    <small id="helpId" className="form-text text-danger">{formproblems.name}</small> <br />
                </div>
                <div className="mb-3">
                        <label  className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name=""
                            id=""
                            aria-describedby="emailHelpId"
                            placeholder="abc@mail.com"
                            ref={inputemail}
                        />
                        <small id="emailHelpId" className="form-text text-danger"
                            >{formproblems.email}</small
                        > <br />
                </div>
                        <div className="mb-3">
                            <label  className="form-label">Message</label>
                            <textarea className="form-control" name="" id="" rows="3" ref={inputmessage}></textarea>
                        </div>
                        <small className="form-text text-danger"
                        >{formproblems.message}</small> <br /> <br />
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="" ref={inputaccept}/>
                            <label className="form-check-label" > Accept our rules </label>
                        </div>
                        <small id="messageHelpId" className="form-text text-danger"
                            >{formproblems.accept}</small> <br />
                        <br />
                        <button
                            type="submit"
                            className="btn btn-primary w-100"
                            
                        >
                            Submit
                        </button>    
            </form>
        </>
    )
}