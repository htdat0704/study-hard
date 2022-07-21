import { useReducer, useRef } from "react";

// 1. Init state
// 2. Actions: Up(state+1)/Down(state-1)
// 3. Reducer
// 4. Dispatch // kích hoạt 1 action

// //1. init state
// const initState = 0;

// //2. actions
// const UP_ACTION = 'up';
// const DOWN_ACTION = 'down';

// //3.reducer

// const reducer = (state,action) =>{
//     switch(action){
//         case UP_ACTION:
//             return state + 1
//         case DOWN_ACTION:
//             return state - 1
//         default:
//             throw new Error('Invalid Action')
//     }
// }


// function UseReducer(){

//     const [count, dispatch] = useReducer(reducer,initState);

//     return (
//         <>
//             <h1>{count}</h1>
//             <button
//                 onClick={() => dispatch(DOWN_ACTION)}
//             >Down
//             </button>
//             <button
//                 onClick={() => dispatch(UP_ACTION)}
//             >Up
//             </button>
//         </>
//     )
// }

// initState Object

//1. init state
const initState = {
    job: '',
    jobs: []
};

//2. actions
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: 'set_job',
        payload
    }
}

const addJob = payload => {
    return {
        type: 'add_job',
        payload
    }
}

const deleteJob = payload => {
    return {
        type: 'delete_job',
        payload
    }
}

//3.reducer

const reducer = (state,action) =>{
    switch(action.type){
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, state.job]
            } 
        case DELETE_JOB:
            const newjobs = [...state.jobs];

            newjobs.splice(action.payload,1)

            return {
                ...state,
                jobs: newjobs
            }
        default:
            throw new Error('Invalid Action')
    }
}


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