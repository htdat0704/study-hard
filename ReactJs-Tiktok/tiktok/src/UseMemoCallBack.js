import{  memo, useState, useMemo, useRef } from "react";     

function UseMemo({onIncrease}) {

    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [products, setProducts] = useState([]);

    const nameRef = useRef()

    const handleChangeName = (e) =>{
        setName(e.target.value);
        console.log(e.target.value);
    }

    const handleChangePrice = (e) =>{
        setPrice(e.target.value);
        console.log(e.target.value);
    }

    const handleSubmit = () => {
        setProducts([...products, {
            name,
            price: +price
        }])

        setName('')
        setPrice('')
        nameRef.current.focus(); // submit rồi sẽ chỉ tới ô username
    }

    const total = useMemo(() => {
        const result = products.reduce((result,value) => result +value.price,0)
        return result
    },[products])



    return (
        <>  <p></p>
            <input 
                ref = {nameRef}
                value = {name}
                placeholder = "Iput Name"
                onChange = {(e) => handleChangeName(e)}
            />
            <input
                value={price}
                placeholder = "Iput price"
                type='number'
                onChange = {(e) => handleChangePrice(e)}
            />
            <button onClick={handleSubmit}>Submit</button>
            <br></br>
            {<p>TOTAL </p> && <p>TOTAL {total}</p>}
            <ul>
                {products.map((prod) => <li key={prod.name}>name: {prod.name}; price:{prod.price}</li>)}
            </ul>
        </>
    )
}

export default memo(UseMemo);