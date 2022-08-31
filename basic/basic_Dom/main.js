document.querySelector('.btn1').addEventListener('click',function(){
    document.querySelector('.welcomeMessage').style.color="red";
});

function blue(){
    document.querySelector('.welcomeMessage').style.color="blue";
}


// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(json => console.log(json))
fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=> api=(data)=>());