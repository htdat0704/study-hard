import { useEffect } from 'react'
import { useState } from 'react'

// useEffect(callback)
// function UseEffect() {

//     const [title, setTitle ] = useState('');

//     useEffect(() => {
//         window.title= title;
//         console.log(title);
//     })

//     return(
//         <div>
//             <input type='text' onChange={e => setTitle(e.target.value)}></input>
//             <h1>Hello F8</h1>

//         </div>
//     )
// }


// useEffect(callback,[]) , [Dependencies]
// function UseEffect() {

//     const tabName = ['posts','comments','albums'];

//     const [posts, setPosts ] = useState([]);
//     const [button, setButton] = useState('posts');
//     const [showGoToTop, setShowGoToTop] = useState(false);
//     const [width, setWidth] = useState(window.innerWidth);

//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${button}`)
//             .then(res => res.json())
//             .then(post => {
//                 setPosts(post);
//             })
//     }, [button])

//     useEffect(() => {

//         const handleScrool = () => {
//             setShowGoToTop(window.scrollY>=200)
//             console.log(window.scrollY)
//         }
        
//         window.addEventListener('scroll',handleScrool)

//         return () => {
//             window.removeEventListener('scroll',handleScrool)
//         }

//     }, [])

//     useEffect(() => {

//         const handleWidth = () =>{
//             setWidth(window.innerWidth);
//         }

//         window.addEventListener('resize', handleWidth)

//         return() =>{
//             window.removeEventListener('resize', handleWidth)
//         }
//     })

//     return(
//         <div>
//             <p>{width}</p>
//             <ul>
//                 {tabName.map(tab => 
//                 <button 
//                     key ={tab}
//                     value={tab}
//                     onClick={(e) => setButton(e.target.value)}
//                     style = { tab === button ? { color: "red" } : {}}
//                 >{tab}
//                 </button>)}
//                 {posts.map(post => <li key={post.id}>{post.title || post.name}</li>)}
//                 {showGoToTop && (
//                     <button
//                         style={{
//                             position: 'fixed',
//                             right: 20,
//                             bottom: 20
//                         }}>
//                             GO TO TOP!
//                     </button>
//                 )}
//             </ul>
//         </div>
//     )
// }

// clean up
// function UseEffect() {

//     const [countDown, setCount ] = useState(190);

//     useEffect(() => {
//         const timeId = setInterval(() => {
//             setCount(prev => prev -1);
//             console.log('Timeout')
//         }, 1000);

//         return () => clearInterval(timeId);
//     }, [])

//     return(
//         <div>
//             <h1>Hello {countDown}</h1>

//         </div>
//     )
// }


//fake avarta
function UseEffect() {

    const [avatar, setAvarta ] = useState();

    useEffect(() => {

        return () => avatar && URL.revokeObjectURL(avatar.preview);
    }, [avatar])

    const handlePreviewAvatar = (e) =>{
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);

        setAvarta(file)
    }

    return(
        <div>
            <input 
                type='file'
                onChange = {handlePreviewAvatar}
            />
            {avatar && (
                <img src = {avatar.preview} alt='' width='80px'/>
            )}
        </div>
    )
}





export default UseEffect