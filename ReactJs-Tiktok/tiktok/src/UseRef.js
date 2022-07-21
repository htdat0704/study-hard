import { useEffect, useRef, useState } from "react";

function UseRef() {
    const [count, setCount] = useState(60);
    const [button, setButton] = useState(false)

    const timerId = useRef();
    const prevCount = useRef();
    const h1Ref = useRef();
    
    // useEffect(() =>{
    //     console.log(h1Ref.current.getBoundingClientRect())
    // },[])
    
    useEffect(() =>{
        prevCount.current = count
    },[count])

    
    const handleStart = () =>{
        timerId.current = setInterval(()=>{
            setCount(prev => prev -1)
        },1000)
        setButton(!button);
    }

    const handleStop = () =>{
        setButton(!button);
        clearInterval(timerId.current);
    }

    return (
        <div>
            {count}
            {!button && <button ref={h1Ref} onClick={handleStart}>Start</button> }
            {button && <button onClick= {handleStop}>Stop</button> }
        </div>
    )
}

export default UseRef