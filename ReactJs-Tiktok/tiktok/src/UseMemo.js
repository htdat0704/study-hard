import {  memo } from "react";     

function UseMemo({onIncrease}) {
    console.log("Test")

    return (
        <>
            <h2>Hello </h2>
            <button onClick={onIncrease}>Increase</button>
        </>
    )
}

export default memo(UseMemo);