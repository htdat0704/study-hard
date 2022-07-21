import { useState } from 'react'

// useState
// function UseState() {

//     const [count, setCount] = useState(1);

//     const handleIncreas = () => {
//       setCount(count +1);
//     }

//   return (
//     <div className="App">
//         <h1>{count}</h1>
//         <button onClick={handleIncreas}>Increase</button>
//     </div>
//   );
// }

// setState using callback in setState
// function UseState() {

//   const [count, setCount] = useState(1);

//   const handleIncreas = () => {
//     setCount(prev => prev +1);
//     setCount(prev => prev +1);
//     setCount(prev => prev +1);
//   }

// return (
//   <div className="App">
//       <h1>{count}</h1>
//       <button onClick={handleIncreas}>Increase</button>
//   </div>
// );
// }

// useState using callback in setState
// function UseState() {

//   let arrMoney = [1,2,3,4,5,6,7,8,9]

//   const [count, setCount] = useState(arrMoney.reduce((total,value) => total + value));

//   const handleIncreas = () => {
//     setCount(prev => prev +1);
//     setCount(prev => prev +1);
//     setCount(prev => prev +1);
//   }

// return (
//   <div className="App">
//       <h1>{count}</h1>
//       <button onClick={handleIncreas}>Increase</button>
//   </div>
// );
// }

// setState change useState become new value
// function UseState() {

//   let obj = {
//     name: "Be",
//     age: 21,
//     address: "VN",
//     gender: false
//   }

//   const [object, setObj] = useState(obj);

//   // const handleUpdate = () => {
//   //   setObj({
//   //     ...object,
//   //     infor: "ok",
//   //   });
//   // }

//   //useCallback

//   const handleUpdate = () =>{
//     setObj( prev => {
//       return {
//         ...object,
//         infor: "BIO THAN THIEN",
//       }
//     })
//   }

// return (
//   <div className="App">
//       <h1>{JSON.stringify(object)}</h1>
//       <button onClick={handleUpdate}>Update</button>
//   </div>
// );
// }

// const arrGift = [
//   'CPU i9',
//   'Vỗ tay',
//   'Nhiều vỗ tay',
//   'Nhiều vỗ tay hơn nữa'
// ]

// function UseState() {

//   var [gift,setGift] = useState("Chưa có phần thưởng nào");

//   const handleRandom = () => {
//     const index = Math.floor(Math.random()*arrGift.length);

//     setGift(gift = arrGift[index]);
//   }
// function UseState (){
//   const [gift,setGift] = useState();

//   const handleRandom = () =>{
//     const index = Math.floor(Math.random()* arrGift.length);

//     setGift(arrGift[index]);
//   }

// return (
//   <div className="App">
//       <h1>{gift || "Chưa có phần thưởng nào"}</h1>
//       <button onClick={handleRandom}>Update</button>
//   </div>
// );
// }

// two-way binding
// Radio  chose 1
// const posts = [
//   {
//     id: 1,
//     content: "abc",
//   },
//   {
//     id: 2,
//     content: "bcd",
//   },
//   {
//     id:3,
//     content: "deg"
//   }
// ]

// function UseState (){
//   const [postCheck,setPost] = useState();

//   const handleSubmit = () =>{
//     console.log({postId: postCheck});
//   }

//   const handleClick = (id) =>{
//     setPost(id);
//   }

//   return (
//     <div className="App">
//         {posts.map(post => (
//           <div key={post.id}>
//               <input
//                 checked = {post.id === postCheck}
//                 type= 'radio'
//                 onChange = {() => handleClick(post.id)}
//               />
//               {post.content}
//           </div>
//         ))}
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// Checkbox chose many
// const posts = [
//   {
//     id: 1,
//     content: "abc",
//   },
//   {
//     id: 2,
//     content: "bcd",
//   },
//   {
//     id:3,
//     content: "deg"
//   }
// ]

// function UseState (){
//   const [postCheck,setPost] = useState([]);

//   const handleSubmit = () =>{
//     console.log({postId: postCheck});
//   }

//   const handleClick = (id) =>{
//     if(postCheck.includes(id)){
//       setPost(postCheck.filter(post => post !== id ));
//     }else{
//       setPost(prev => [...postCheck, id]);
//     }
//   }

//   return (
//     <div className="App">
//         {posts.map(post => (
//           <div key={post.id}>
//               <input
//                 checked = {postCheck.includes(post.id)} 
//                 type= 'checkbox'
//                 onChange = {() => handleClick(post.id)}
//               />
//               {post.content}
//           </div>
//         ))}
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// input change file two way binding

// function UseState (){
//   const [postCheck,setPost] = useState('');

//   const handleSubmit = () =>{
//     console.log({postUserName: postCheck});
//   }

//   const handleChange = value =>{
//     setPost(value);
//     console.log(postCheck);
//   }

//   return (
//     <div className="App">
//           <div >
//               UserName: <br></br>
//               <input
//                 type= 'type'
//                 onChange = {(e) => handleChange(e.target.value)}
//               />
//           </div>
//         <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// to do list
function UseState (){

  const [job,setJob] = useState('');
  const [jobs,setJobs] = useState(() => {
    const jobsList = JSON.parse(localStorage.getItem('jobs'));
    return jobsList ?? []
  });

  const handleSubmit = () =>{
    setJobs(prev => {
      const outJobs = [...prev, job];
      const jobsJson = JSON.stringify(outJobs) 
      localStorage.setItem('jobs',jobsJson)

      return outJobs
    })
    setJob(prev => (''))

  }

  const handleClickDelete = (job) =>{
    setJobs(prev => {
      const outJobs = prev.filter(jobs => jobs !== job);
      const jobsJson = JSON.stringify(outJobs) 
      localStorage.setItem('jobs',jobsJson)

      return outJobs
    })

  }

  return (
    <div className="App">
          <div >
              ToDoList: <br></br>
              <input
                type= 'type'
                onChange = {e => setJob(e.target.value)}
                value = {job}
              />
          </div>
        <button onClick={handleSubmit}>Submit</button>
        <br></br>
          <ul>
            {jobs.map(job => <li key={job}>{job} <button style= {{color: "red"}} onClick={() => handleClickDelete(job)}>Xóa</button></li>)}
          </ul>
    </div>
  );
}


export default UseState