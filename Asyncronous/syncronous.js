const functionOne = () => { 
    console.log("Process 2");
};

const functionTwo = (ms) => {
    const startTime = Date.now();
    while (Date.now() - startTime < ms) {
        
    }
    console.log("this is process 3");
};


console.log("Process 1");
functionOne()
functionTwo(5000);
console.log("Process 4");

