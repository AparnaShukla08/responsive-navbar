// const links= document.getElementById('list-container');
// const menu= document.getElementById('menu');
// menu.addEventListener('click', function(){
//     links.style.display='block'
// })
const menu= document.getElementById('menu');
const mobile= document.querySelector('.mobile-nav');
menu.addEventListener('click', function(){
    mobile.classList.toggle('is-active');
})

// let jsonstring= '{"name":"John", "age":30, "city":"New York"}'
// console.log(jsonstring)
// let result= JSON.parse(jsonstring);
// console.log(result);
// let str=console.log(JSON.stringify(result))

// let arr=[1,2,3,4,5]
// let arr_alice= console.log(arr.slice(0,2))
// let arr_splice= console.log(arr.splice(0,2,"a","b"))
// console.log(arr)