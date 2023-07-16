const functionOne = () => { 
    console.log("Process 2");
};

const functionTwo = () => {
    setTimeout(()=>{
        console.log("process 3");
    },3000)
};


console.log("Process 1");
functionOne()
functionTwo();
console.log("Process 4");

