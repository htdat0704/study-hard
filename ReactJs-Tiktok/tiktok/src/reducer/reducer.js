import {SET_JOB, ADD_JOB, DELETE_JOB} from './constant'

export const initState = {
    job: '',
    jobs: []
};

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

export default reducer