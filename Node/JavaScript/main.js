// var arr= [
//     {
//         name: "abc",
//         course: {
//             id: 1,
//             name: "JSON",
//         },
//     },
//     {
//         name: "abc2",
//         course: {
//             id: 2,
//             name: "JSONE222",
//         },
//     },
//     {
//         name: "abc3",
//         course: {
//             id: 3,
//             name: "JSONE",
//         },
//     },
// ]

// const course = arr.reduce((arrOutput,item) => {
//     return arrOutput.concat(item.course);
// }, [])

// console.log(course)

// GET TOTAL METAL

// var sports = [
//     {
//         name: 'Bơi lội',
//         gold: 11
//     },
//     {
//         name: 'Boxing',
//         gold: 3
//     },
//     {
//         name: 'Đạp xe',
//         gold: 4
//     },
//     {
//         name: 'Đấu kiếm',
//         gold: 5
//     },
// ]

// const getTotalMedal = (arr) => {
//     const total = arr.reduce((total,item) => total+item.gold,0);
//     return total;
// }

// console.log(getTotalMedal(sports));

// GET RAITING

// var watchList = [
//     {
//       "Title": "Inception",
//       "Year": "2010",
//       "Rated": "PG-13",
//       "Released": "16 Jul 2010",
//       "Runtime": "148 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Christopher Nolan",
//       "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//       "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//       "Language": "English, Japanese, French",
//       "Country": "USA, UK",
//       "imdbRating": "8.8",
//       "imdbVotes": "1,446,708",
//       "imdbID": "tt1375666",
//       "Type": "movie",
//     },
//     {
//       "Title": "Interstellar",
//       "Year": "2014",
//       "Rated": "PG-13",
//       "Released": "07 Nov 2014",
//       "Runtime": "169 min",
//       "Genre": "Adventure, Drama, Sci-Fi",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan, Christopher Nolan",
//       "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//       "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//       "Language": "English",
//       "Country": "USA, UK",
//       "imdbRating": "8.6",
//       "imdbVotes": "910,366",
//       "imdbID": "tt0816692",
//       "Type": "movie",
//     },
//     {
//       "Title": "The Dark Knight",
//       "Year": "2008",
//       "Rated": "PG-13",
//       "Released": "18 Jul 2008",
//       "Runtime": "152 min",
//       "Genre": "Action, Adventure, Crime",
//       "Director": "Christopher Nolan",
//       "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//       "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//       "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//       "Language": "English, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "9.0",
//       "imdbVotes": "1,652,832",
//       "imdbID": "tt0468569",
//       "Type": "movie",
//     },
//     {
//       "Title": "Batman Begins",
//       "Year": "2005",
//       "Rated": "PG-13",
//       "Released": "15 Jun 2005",
//       "Runtime": "140 min",
//       "Genre": "Action, Adventure",
//       "Director": "Christopher Nolan",
//       "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//       "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//       "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//       "Language": "English, Urdu, Mandarin",
//       "Country": "USA, UK",
//       "imdbRating": "8.3",
//       "imdbVotes": "972,584",
//       "imdbID": "tt0372784",
//       "Type": "movie",
//     },
//     {
//       "Title": "Avatar",
//       "Year": "2009",
//       "Rated": "PG-13",
//       "Released": "18 Dec 2009",
//       "Runtime": "162 min",
//       "Genre": "Action, Adventure, Fantasy",
//       "Director": "James Cameron",
//       "Writer": "James Cameron",
//       "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//       "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//       "Language": "English, Spanish",
//       "Country": "USA, UK",
//       "imdbRating": "7.9",
//       "imdbVotes": "876,575",
//       "imdbID": "tt0499549",
//       "Type": "movie",
//     }
//   ];

//   const getRating = (arr) => {
//     const newArr = arr.filter(obj => obj.Director === "Christopher Nolan");
//     var i = newArr.length;
//     const raitting = newArr.reduce((total,watchList) => total+parseFloat(watchList.imdbRating),0.0);
  
//     return raitting/i;
//   }

//   console.log(getRating(watchList));

// FOREACH // filter

// Array.prototype.forEach2 = function(cb){
//   var length = this.length;
//   for(let i = 0; i< length; i++){
//     cb(this[i],i,this);
//   }
// }

// Array.prototype.filter2 = function(cb){
//   var length = this.length;
//   let newArr = [];
//   for(let obj in this){
//     if(this.hasOwnProperty(obj)){
//       var result = cb(this[index],index,this);
//       if(result){
//         newArr.push(this[index]);
//       }
//     }
//   }
//   return newArr;
// }

// var course = [
//   {
//     name: 'Js',
//     price: 444
//   },
//   {
//     name: 'PHP',
//     price: 222
//   },
//   {
//     name: "Java",
//     price: 232
//   }
// ];

// course.forEach2((course,index,arr) => console.log(course,index,arr));

// var headingNode = document.getElementById('heading');

// console.log(headingNode);

// class Electric {
//   constructor(name,price,isNew){
//     this.name = name;
//     this.price = price;
//     this.isNew = isNew;
//   }

//   getName(){
//     return this.name;
//   }

//   getPrice(){
//     return this.price;
//   }

//   isNew(){
//    return this.isNew; 
//   }

//   setName(newName){
//     this.name = newName;
//   }

//   setPrice(newPrice){
//     this.price = this.price;
//   }
// }

// const arrDiv = document.querySelectorAll("div");
// console.log(arrDiv);
// for(var index of arrDiv ){
//     index.classList.add('box');
// }



// RPOMISE

// var promise = new Promise