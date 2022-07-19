// var promise = new Promise(
//     //Executor
//     function(resolve, reject){
//         // Logic
//         // thành công: resolve()
//         // thất bại: reject()
//         resolve([
//             {
//                 id:1,
//                 name: "JS",
//             }
//         ]);
//     }
// );

// promise
//     .then( () => {
//         //callback function
//         return new Promise(function(reject){
//             return reject([1,2,3,4,6]);
//         })
//     })
//     .then( (data) => {
//         //callback function
//         console.log(data);
//         return data++;
//     })
//     .catch( () => {
//         //callback function
//         console.log('Fail');
//     })
//     .finally( () => {
//         //callback function
//         console.log("done");
//     })

// function sleep(ms){
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms);
//     });
// }

// sleep(1000)
//     .then(function(){
//         console.log(1);
//         return sleep(1000);
//     })
//     .then(function(){
//         console.log(2);
//         return new Promise((resolve,reject) => reject("error"));
//     })
//     .then(function(){
//         console.log(3);
//         return sleep(3000);
//     })
//     .catch(function(data){
//         console.log(data);
//     })


//     function hell(value, cb) {
//     cb(value);
// }

// callback hell => promise

// Không sử dụng Promise dẫn đến tạo ra callback hell 
// hell(1, function (valueFromA) {
//     hell(valueFromA + 1, function (valueFromB) {
//         hell(valueFromB + 1, function (valueFromC) {
//             hell(valueFromC + 1, function (valueFromD) {
//                 console.log(valueFromD + 1);
//             });
//         });
//     });
// });

// // Sử dụng Promise sẽ tạo ra đoạn code dễ đọc hơn và vẫn đảm bảo đúng logic
// function notHell(value) {
//     return new Promise(function (resolve,reject) {
//         if(typeof value == "number"){
//             resolve(value); 
//         }else{
//             reject(value);
//         }
//     });
// }

// notHell(1)
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         return value + 1;
//     })
//     .then(function (value) {
//         console.log(value + 1);
//     });

// function hell(value, cb) {
//     cb(value);
// }

// async await

// const excuteAsync = async () => {
//     try{
//         const respon1 = await notHell("sd");
//         const respon2 = await notHell(parseInt(respon1)+1);
//         const respon3 = await notHell(parseInt(respon2)+1);
//         console.log(respon3) 
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// excuteAsync();

// Example Promise
// var users = [
//     {
//         id: 1,
//         name: 'Kien Dam'
//     },
//     {
//         id:2,
//         name: 'Son Dang'
//     },
//     {
//         id:3,
//         name: 'Hung Dam'
//     }
// ];

// var comments = [
//     {
//         id:1,
//         user_id: 1,
//         content: "Ong oi phim gì hay quá"
//     },
//     {
//         id:2,
//         user_id: 2,
//         content: "Vừa ra xong tề"
//     }
// ]

// // 1. lay comments
// // 2. Tu comments lay ra user_id.
// // tu user_id lay ra users.name

// // Fake API

// function getComments(comments) {
//     return new Promise(function(resolve,reject){
//         return resolve(comments);
//     })
// }


// getComments(comments)
//     .then(function (comments){
//         var userIds = comments.map((value) => value.user_id)
//         var arrUser = users.filter((user) => userIds.includes(user.id));
//         return {
//             comments: comments,
//             user: arrUser
//         }
//     })
//     .then(function (obj){
//         outputHtml = '';
//         for(var index in obj.comments){
//             var userFind = obj.user.find((user) => user.id == obj.comments[index].user_id);
//             outputHtml += "Comments: "+obj.comments[index].content+" name: "+userFind.name +"<br>";
//         }
//         return outputHtml;
//     })
//     .then(function (dataOutput){
//         document.getElementById('promise').innerHTML = dataOutput;
//     })




// var executeAsync = async () =>{
//     await new Promise((resolve) => setTimeout( ()=> resolve(),3000));
//     var respone1 = await getComments(comments);
//     console.log(respone1);
//     return respone1;
// }

// executeAsync(comments)
//     .then(function (comments){
//         var userIds = comments.map((value) => value.user_id)
//         var arrUser = users.filter((user) => userIds.includes(user.id));
//         return {
//             comments: comments,
//             user: arrUser
//         }
//     })
//     .then(function (obj){
//         outputHtml = '';
//         for(var index in obj.comments){
//             var userFind = obj.user.find((user) => user.id == obj.comments[index].user_id);
//             outputHtml += "Comments: "+obj.comments[index].content+" name: "+userFind.name +"<br>";
//         }
//         return outputHtml;
//     })
//     .then(function (dataOutput){
//         document.getElementById('promise').innerHTML = dataOutput;
//     })


// var postApi = "https://jsonplaceholder.typicode.com/users";

//     //stream    
// fetch(postApi)
//     .then(function(respon){
//         return respon.json(); // trả về 1 promise JSON.parse JSON -> js types
//     })
//     .then(function(posts){
//         var html = "";
//         for(var i in posts){
//             html += `Name: ${posts[i].name}, User name: ${posts[i].username}, email: ${posts[i].email}, addressCity: ${posts[i].address.city} <br>`;
//         }
//         return html;
//     })
//     .then((data)=> document.querySelector("#promise").innerHTML = data);



var divPromise = document.getElementById('promise');

var courseApi = "http://localhost:3000/posts"

function start(){
    getComments(render);
}

start();

function getComments(callback){
    fetch(courseApi)
        .then((respon)=>respon.json())
        .then(callback);
}

function createComments(data){ 
    var option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data) // gui di de them vao json;
    }
    fetch(courseApi,option)
}

function deleteCommentsE(data){ 
    var option = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
          },
    }
    fetch(courseApi +'/'+ data,option)
}   

function updateTitle(id,dataTitle,callback){ 
    var option = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataTitle) // gui di de them vao json;
    }
    fetch(courseApi+ '/'+id,option)
        .then(function(reponse){
             return reponse.json()
        })
        .then(callback)
}   

var post;

function render(posts){
    console.log(posts);
    post = posts;
    var outputHTML = document.querySelector("#promise");

    var arrHTML = posts.map((obj)=> `id: ${obj.id} name:${obj.author} title:${obj.title} <br>`)

    outputHTML.innerHTML = arrHTML.join('');
}

function addComments(){
    let author = document.getElementById('author').value;
    let title = document.querySelector('#title').value;

    let obj = {
        title: title,
        author: author
    }

    createComments(obj)
}

deleteComments = () => {
    let idXoa = document.getElementById('idxoa').value;
    deleteCommentsE(parseInt(idXoa));
}

updateTitleComments = () => {
    let idUpdate = parseInt(document.getElementById('idUpdate').value);
    let contextUpdate = document.getElementById('titleUpdate').value;
    
    var objUpdate = post.find((obj)=>obj.id = idUpdate);

    objUpdate.title = contextUpdate;
    console.log(objUpdate);

    delete objUpdate.id;
    updateTitle(idUpdate,objUpdate, () => getComments(render));
}