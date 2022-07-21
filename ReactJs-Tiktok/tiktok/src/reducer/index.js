import { useReducer, useRef } from "react";
import reducer ,{ initState} from "./reducer";
import {setJob, addJob, deleteJob} from "./actions";

function UseReducer(){

    const [state, dispatch] = useReducer(reducer,initState);
    const {job, jobs} = state;

    const inputRef = useRef();

    const handleSubmit = () => {
        if(state.job === ''){
            alert('NULL')
        }else{
            dispatch(addJob(state.job))
            dispatch(setJob('')) 
        }
        inputRef.current.focus()
    } 


    return (
        <>
            <h1>To do list</h1>
            <input 
                type='text'
                value = {job}
                onChange = {(e) => dispatch(setJob(e.target.value))}
                ref = {inputRef}
            />
            <button
                onClick= {() => handleSubmit()}
            >Add
            </button>
            <ul>
                {jobs.map((job, index) => {
                    return <li key={index}>{job} <span style={{color: "red"}} onClick={() => dispatch(deleteJob(index))}>&times;</span></li>
                })}
            </ul>
            
        </>
    )
}

export default UseReducer