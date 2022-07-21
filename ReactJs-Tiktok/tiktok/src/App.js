// import UseState from './UseState.js'
// import UseEffect from './UseEffect.js'
// import UseRef from './UseRef'
// import UseMemo from './UseMemoCallBack'
// import UseReducer from './UseReducer'
// import UseReducer from './reducer'
// import Context from './useConText.js'
import {useRef} from 'react'
// import {ThemeContext} from './ThemeContext'
import {useCont} from './globalState/hooks'
import {setJob, addJob, deleteJob} from './globalState/actions'

function App (){

  const [state,dispatch] = useCont();
  const {job, jobs} = state;

  const inputRef = useRef();

  const handleSubmit = () =>{
    dispatch(addJob(job));
    dispatch(setJob(''));
    inputRef.current.focus();
  }

  return (
      <div className="App">
        <input 
          ref={inputRef}
          type= ' text'
           value = {job}
          onChange = {e => dispatch(setJob(e.target.value))}
        />
        <button
            onClick={handleSubmit}
          >
          SUBMIT
        </button>
        <ul>
          {jobs.map((job,index) => <li key={index}>{job} <span onClick={() => dispatch(deleteJob(index))}>x</span></li>)}
        </ul>
      </div>
  );
}

export default App;
